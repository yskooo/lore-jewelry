const fs = require('fs');
const path = require('path');

const csvDir = path.join(__dirname, '../data/csv');
const outPath = path.join(__dirname, '../data/products.ts');

function parseCSVLine(text) {
  const result = [];
  let row = [];
  let inQuotes = false;
  let val = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"') {
        if (i + 1 < text.length && text[i + 1] === '"') {
          val += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        val += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        row.push(val);
        val = '';
      } else if (char === '\n' || char === '\r') {
        if (char === '\r' && text[i + 1] === '\n') i++;
        row.push(val);
        result.push(row);
        row = [];
        val = '';
      } else {
        val += char;
      }
    }
  }
  if (val || row.length > 0) {
    row.push(val);
    result.push(row);
  }
  return result;
}

function parsePrice(priceStr, defaultLabel) {
  const lines = priceStr.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const variants = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let label = defaultLabel || ("Variant " + (i+1));
    let pricePart = line;
    
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      label = line.substring(0, colonIdx).trim();
      pricePart = line.substring(colonIdx + 1).trim();
    }
    
    let discount = undefined;
    let price = 0;
    let originalPrice = undefined;
    
    const discountMatch = pricePart.match(/(-?\d+%)|(\d+%)/);
    if (discountMatch) {
      discount = discountMatch[0];
      if (!discount.startsWith('-')) discount = '-' + discount;
    }
    
    const priceMatches = pricePart.match(/\$[\d.]+/g);
    if (priceMatches && priceMatches.length > 0) {
      price = parseFloat(priceMatches[0].replace('$', ''));
      if (priceMatches.length > 1) {
        originalPrice = parseFloat(priceMatches[1].replace('$', ''));
      }
    } else {
      const numMatches = pricePart.match(/[\d.]+/g);
      if (numMatches && numMatches.length > 0) {
        price = parseFloat(numMatches[0]);
        if (numMatches.length > 1) {
          originalPrice = parseFloat(numMatches[1]);
        }
      }
    }
    
    if (isNaN(price)) price = 0;
    
    variants.push({
      label,
      price,
      ...(originalPrice && !isNaN(originalPrice) ? { originalPrice } : {}),
      ...(discount ? { discount } : {})
    });
  }
  
  if (variants.length === 0) {
    variants.push({
      label: defaultLabel || 'Default',
      price: 0
    });
  }
  
  return variants;
}

function processFile(filename) {
  const content = fs.readFileSync(path.join(csvDir, filename), 'utf-8');
  const rows = parseCSVLine(content);
  
  const headers = rows[0];
  const headerLower = headers.map(h => h.toLowerCase().trim());
  
  const priceIdx = headerLower.findIndex(h => h.includes('price(usd)') || h === 'price');
  const nameIdx = headerLower.findIndex(h => h === 'product name');
  const urlIdx = headerLower.findIndex(h => h.includes('website link') || h === 'link');
  const imgIdx = headerLower.findIndex(h => h === 'image link');
  const detailIdx1 = headerLower.findIndex(h => h === 'color grade');
  const detailIdx2 = headerLower.findIndex(h => h === 'color' || h.includes('color /'));
  const materialIdx = headerLower.findIndex(h => h === 'material');
  const caratIdx = headerLower.findIndex(h => h === 'carat weight');
  const sizeIdx = headerLower.findIndex(h => h === 'size');
  
  const dataRows = rows.slice(1).filter(r => r.length > 1 && r[0].trim());
  
  const items = dataRows.map((r, i) => {
    const name = nameIdx >= 0 ? (r[nameIdx] || '') : '';
    let d1 = detailIdx1 >= 0 ? r[detailIdx1] : '';
    let d2 = detailIdx2 >= 0 ? r[detailIdx2] : '';
    const details = [d1, d2].filter(Boolean).join(', ');
    const material = materialIdx >= 0 ? (r[materialIdx] || 'Sterling Silver 925') : 'Sterling Silver 925';
    const caratWeight = caratIdx >= 0 ? r[caratIdx] : '';
    const size = sizeIdx >= 0 ? r[sizeIdx] : '';
    
    let defaultLabel = caratWeight || size || 'Default';
    
    const priceRaw = priceIdx >= 0 ? r[priceIdx] : '';
    const variants = parsePrice(priceRaw, defaultLabel);
    
    const url = urlIdx >= 0 ? r[urlIdx] : '';
    const image = imgIdx >= 0 ? r[imgIdx] : '';
    
    return {
      id: filename.replace(/[^A-Za-z]/g, '').substring(0, 5) + "-" + (i + 1),
      name,
      details,
      material,
      variants,
      url,
      image
    };
  });
  
  return items;
}

const files = {
  rings: [
    'Lore Jewelry Products _ US TikTok links - WOMAN RING.csv',
    'Lore Jewelry Products _ US TikTok links - WOMAN BAND .csv'
  ],
  earrings: ['Lore Jewelry Products _ US TikTok links - WOMAN EARRINGS.csv'],
  necklaces: ['Lore Jewelry Products _ US TikTok links - WOMAN NECKLACE.csv'],
  artificial: ['Lore Jewelry Products _ US TikTok links - ARTIFICIAL GEMSTONE JEWELRY .csv'],
  menRings: ['Lore Jewelry Products _ US TikTok links - MEN RING.csv'],
  bracelets: ['Lore Jewelry Products _ US TikTok links - WOMAN BRACELET.csv']
};

let output = `export interface ProductVariant {
  label: string;
  price: number;
  originalPrice?: number;
  discount?: string;
}

export interface JewelryItem {
  id?: string;
  name: string;
  details?: string;
  material?: string;
  variants: ProductVariant[];
  image: string;
  url?: string;
  subCategory?: string;
  price?: number;
}

`;

for (const [key, filenames] of Object.entries(files)) {
  let allItems = [];
  for (const f of filenames) {
    const fullPath = path.join(csvDir, f);
    if (fs.existsSync(fullPath)) {
      allItems = allItems.concat(processFile(f));
    } else {
      console.warn("Missing file: " + f);
    }
  }
  
  output += "export const " + key + ": JewelryItem[] = " + JSON.stringify(allItems, null, 2) + ";\n\n";
}

output += "export const allProducts = [...rings, ...earrings, ...necklaces, ...artificial, ...menRings, ...bracelets];\n";

fs.writeFileSync(outPath, output);
console.log('Successfully generated products.ts');
