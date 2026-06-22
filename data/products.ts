export interface ProductVariant {
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

export const rings: JewelryItem[] = [
  {
    "id": "LoreJ-1",
    "name": "Square Shaped Moissanite Ring S925 0.5/1.0/2.0 CT - Emerald Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 71
      },
      {
        "label": "1.0",
        "price": 87
      },
      {
        "label": "2.0",
        "price": 138,
        "originalPrice": 300,
        "discount": "-54%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhbwyv5XbE-mpKde/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b668b6e0a32644229ffe1c5378b27d7b~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-2",
    "name": "Mae Silver Moissanite Ring S925 0.5/ 1.0 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 31,
        "originalPrice": 60,
        "discount": "-48%"
      },
      {
        "label": "1.0",
        "price": 45
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhbEo5pAhR-JBAnR/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/4a0facf349234b79805837c50a4a8b86~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-3",
    "name": "Twin Stars Moissanite Ring S925 0.01 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.01 CT",
        "price": 51,
        "originalPrice": 105,
        "discount": "-51%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhg19T9qrn-8xj7Z/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/7604471473e94af98c6fc985e79c18c2~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-4",
    "name": "Britney Moissanite Ring S925 0.5/1.0 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 51
      },
      {
        "label": "1.0",
        "price": 69
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgJt9UKCx-4JEPi/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/bcdba79dbf354456aac58dd2bac820d7~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-5",
    "name": "Florence Moissanite Ring S925 0.5/1.0 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 51
      },
      {
        "label": "1.0",
        "price": 71,
        "originalPrice": 150,
        "discount": "-53%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgd3WM51e-ICQxI/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b1187ad6312b4757b79fde3743232b60~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-6",
    "name": "Star Light Moissanite Ring S925 0.5 / 1.0 CT - Round Cut - Lore Jewelry",
    "details": " D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 38
      },
      {
        "label": "1.0",
        "price": 69
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgLFUF4sF-KQYau/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/abdc822ecb5140378208d1694eaa5b09~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-7",
    "name": "Bling Star Moissanite Ring S925 0.5/1.0/2.0 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 44
      },
      {
        "label": "1.0",
        "price": 64
      },
      {
        "label": "2.0",
        "price": 83
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgF2CMLUo-E8ZkZ/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/a64cfcd0777c4d09b8d483dcc5f9dfb7~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-8",
    "name": "Sophia Luxury Moissanite Ring S925 0.5/1.0/2.0 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 51
      },
      {
        "label": "1.0",
        "price": 91
      },
      {
        "label": "2.0",
        "price": 118
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgjDREVMk-D8VEa/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/960a160c5e1149bbb955eb5432938d2d~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-9",
    "name": "Crescent Star Moissanite Ring S925 0.5 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5 CT",
        "price": 51,
        "originalPrice": 105,
        "discount": "-51%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhg6GHo7oQ-uOTPW/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/321ff2c52c6548edb53fc84173c87c5e~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-10",
    "name": "Flower Luxury Moissanite Ring Silver S925 0.5/1.0/2.0 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 45
      },
      {
        "label": "1.0",
        "price": 64,
        "originalPrice": 134,
        "discount": "-52%"
      },
      {
        "label": "2.0",
        "price": 88
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgru4W3fd-eNOW3/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/abfd8f1033bd4a53af7bacb4d0349c85~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-11",
    "name": "Kailee Flower Moissanite Ring S925 0.5/1.0 CT- Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 49
      },
      {
        "label": "1.0",
        "price": 88
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgknjoRp1-J2MHn/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/40e5249c377846daa887fa5689830851~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-12",
    "name": "Silver Classic Moissanite Ring 0.52 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": " Sterling Silver 925",
    "variants": [
      {
        "label": "Size 4,6,7,9",
        "price": 36
      },
      {
        "label": "Size 5&8",
        "price": 36,
        "originalPrice": 75,
        "discount": "-52%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgk3CBBjQ-JPuuP/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/337ce93c0474413ab35b6b2281a1c4a2~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-13",
    "name": "Bling Fuji Moissanite Ring S925 0.5/1.0/2.0 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 45
      },
      {
        "label": "1.0",
        "price": 61,
        "originalPrice": 128,
        "discount": "-52%"
      },
      {
        "label": "2.0",
        "price": 111
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgANBbbuk-8pEsk/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f668099f45954d7a89495b1d6348ff75~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-14",
    "name": "Sparkly Flower Elegant Moissanite Ring S925 0.5/1.0 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 51,
        "originalPrice": 105,
        "discount": "-51%"
      },
      {
        "label": "1.0",
        "price": 78
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgyUnqnbh-i01ST/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/8d7287f5e30f4615a833ea96c2981226~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-15",
    "name": "Sweet Heart Moissanite Ring S925 0.5/1.0/2.0 CT - Heart Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 65,
        "originalPrice": 135,
        "discount": "-52%"
      },
      {
        "label": "1.0",
        "price": 85
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgyj7gSd1-EyN7w/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b997598d19ed41e293064b4e833724d7~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-16",
    "name": "Claws Square Elegant Moissanite Ring Series S925 0.5/1.0 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone), Rainbow Claws, Gray Claws, Lemon Claws,Light Champagne Claws,Pink Claws,Rainbow Red Claws,Garnet Claws,Rainbow Blue Claws,Dark Champagne Claws,Orange Claws,Fanta Claws",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 55,
        "originalPrice": 66
      },
      {
        "label": "1.0",
        "price": 68,
        "originalPrice": 81
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgfDHsktW-vG4jb/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/93473f28db6a40c8895308018821666f~tplv-fhlh96nyum-crop-webp:1080:1080.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-17",
    "name": "Aurel Silver Moissanite Ring S925 0.5/ 1.0/ 2.0 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": " Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 60
      },
      {
        "label": "1.0",
        "price": 85
      },
      {
        "label": "2.0",
        "price": 118
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhguAoGbPo-WWBsp/",
    "image": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/150738cbeb804a9b8ea25789d8919985~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-18",
    "name": "Danica Flower Moissanite Ring S925 - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 58
      },
      {
        "label": "1.0",
        "price": 85,
        "originalPrice": 180,
        "discount": "-53%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhg9J195W9-z9a9x/",
    "image": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/8f72370555c845bba0718ff3ecc8df8d~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-19",
    "name": "Estella Moissanite Ring Silver S925 1.0/2.0 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0",
        "price": 98
      },
      {
        "label": "2.0",
        "price": 125
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgxnMKvHf-0xNPe/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/dd7f7584dcdf45a79401cd8e93525117~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-20",
    "name": "Marquise Shaped Moissanite Ring Silver S925 0.5/1.0 CT - Marquise Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 71
      },
      {
        "label": "1.0",
        "price": 111
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgx5DHptN-dDbeH/",
    "image": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f0a1940c0d6141388155216daa0663d5~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-21",
    "name": "Swallowtail Moissanite Ring S925 1.0 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": " 1.0 CT",
        "price": 65,
        "originalPrice": 135,
        "discount": "-52%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgQXQPK1x-cX9e4/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/030b4fdfe1124b2ba6977ca9fd62fbdf~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-22",
    "name": "Halley Moissanite Ring S925 0.5/1.0/2.0 CT - Emerald Cut - Lore Jewelry\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 71
      },
      {
        "label": "1.0",
        "price": 105
      },
      {
        "label": "2.0",
        "price": 138
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgXYbMvVP-J9zQP/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/6fe6e2047e9d4cf582614db5034cd1fc~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-23",
    "name": "Josie Moissanite Ring S925 0.5/1.0/2.0 CT - Oval Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 65
      },
      {
        "label": "1.0",
        "price": 85
      },
      {
        "label": "2.0",
        "price": 125,
        "originalPrice": 300,
        "discount": "-54%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgpY4hVNM-7QkgZ/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/09ac25c4c3d74bd2abddc549edd39bd0~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-24",
    "name": "Adeline Oval Moissanite Ring S925 1.0 CT - Oval Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "Adjustable",
        "price": 91,
        "originalPrice": 195,
        "discount": "-53%"
      },
      {
        "label": "Size 4-6",
        "price": 91
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgpJeaC8a-m2eKX/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/ebde91b93af443489903a0ef8710b14a~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-25",
    "name": "Catherine Pear Moissanite Ring Silver S925 1.0 CT - Pear Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT",
        "price": 91
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgtS8yGfL-OqvBF/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c1a8192e45a749f69c9486aaa1910a4a~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-26",
    "name": "Angel Eye Moissanite Ring S925 0.5/1.0/2.0 CT - Oval Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 71
      },
      {
        "label": "1.0",
        "price": 91
      },
      {
        "label": "2.0",
        "price": 138
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgWJMkqH6-YeSsk/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/8ec83b3368ad491391039702a8bca3d4~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-27",
    "name": "Angel Eye Moissanite Ring S925 0.5/1.0/2.0 CT - Oval Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 71
      },
      {
        "label": "1.0",
        "price": 91
      },
      {
        "label": "2.0",
        "price": 138
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhg7WXpPDo-kvDbU/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/8ec83b3368ad491391039702a8bca3d4~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-28",
    "name": "Silver Princess Moissanite Ring S925 3.0 CT- Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "3.0 CT",
        "price": 176
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgWQ7voPg-lpF2s/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/2525ae5b4c4a4c77888934e363679bb1~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-29",
    "name": "Edith Moissanite Ring S925 0.5/1.0 CT - Oval Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 65
      },
      {
        "label": "1.0",
        "price": 85
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhg3fxtKEP-U0jJL/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f73d3378cb0a421f99285d93837fe087~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-30",
    "name": "New Emery Silver Moissanite Ring S925 0.5 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5 CT",
        "price": 38,
        "originalPrice": 75,
        "discount": "-49%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgwEXQJx4-G8rBB/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/cb3a0fd218e04722a2fc2a5c4f48e390~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-31",
    "name": "Hailee Moissanite Ring S925 0.5/1.0/2.0 CT - Oval Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 65
      },
      {
        "label": "1.0",
        "price": 85
      },
      {
        "label": "2.0",
        "price": 125
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgKGqaGGV-bMYca/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/3d6b3f2b36414731ae4b234677802c2c~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-32",
    "name": "Wavy Luxury Moissanite Ring 1.0 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT",
        "price": 65
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhgoQD2mL1-tBQ7W/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/5d987c0e91934b01b569401bdb6fcd05~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-33",
    "name": "Quinn Wave Halo Moissanite Ring S925 1.0 /2.0 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0",
        "price": 90
      },
      {
        "label": "2.0",
        "price": 118
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhpJGoH2Lb-9cfuY/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/5f64628546ff4191999dac4be3bd863d~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-34",
    "name": "Star Queen Moissanite Ring S925 2.0 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "2.0 CT",
        "price": 91
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhpdggBbLc-boJla/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f853f50e922745efad8baeb22d284193~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-35",
    "name": "Eden Flower Moissanite S925 1.0/2.0/3.0 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0",
        "price": 78
      },
      {
        "label": "2.0",
        "price": 111
      },
      {
        "label": "3.0",
        "price": 145
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhpLjWk4s1-nPqHb/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/8dbced01f29640fca56cb247ba2aff2c~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-36",
    "name": "Simply Elegant Moissanite Ring S925 2.0 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "2.0 CT",
        "price": 90
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhp22mm374-OEsTe/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/6a19cc9f1d134d57ad1fc275bce24a02~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  }
];

export const bands: JewelryItem[] = [
  {
    "id": "LoreJ-1",
    "name": "7-Stone Moissanite Ring S925 0.77 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.77 CT",
        "price": 37,
        "originalPrice": 74,
        "discount": "-50%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhVx5huSt7-YamK7/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b2b7dee319704c7cb8c91ba6609656ab~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-2",
    "name": "7-Stone Moissanite Ring S925 0.77 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.77 CT",
        "price": 37,
        "originalPrice": 74,
        "discount": "-50%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhVx5huSt7-YamK7/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b2b7dee319704c7cb8c91ba6609656ab~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-3",
    "name": "Elegant Crown Moissanite Ring S925 0.3 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.3 CT",
        "price": 38,
        "originalPrice": 75,
        "discount": "-49%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhVpdmKegN-5CvEc/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/76e975f916b342e991555e8d9746b8a4~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-4",
    "name": "Carissa Moissanite Ring S925 0.03 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.03 CT",
        "price": 24,
        "originalPrice": 34,
        "discount": "-29%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhVnB1LQ1H-1uEOx/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c959ce6ded8942c4a52e7a5ae3c49ac2~tplv-fhlh96nyum-crop-webp:1000:1000.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-5",
    "name": "Hera Moissanite Ring S925 - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.025ct X 25",
        "price": 30
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhVWPWagcw-aogps/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/44a3080b3630419f920a0592b1823b76~tplv-fhlh96nyum-crop-webp:1254:1254.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-6",
    "name": "Simple Twist Moissanite Ring S925 - Channel Set - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.0025ct x7",
        "price": 22
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhVveQh1sq-5CGYr/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/0c32a217d4e149efa89ace964d63e8d6~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-7",
    "name": "Azalea Moissanite Ring S925 0.06 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.06 CT",
        "price": 49,
        "originalPrice": 99,
        "discount": "-51%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhVcXgq992-Sl9tU/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/58a39c45bc784d009ed00a54d58517e4~tplv-fhlh96nyum-crop-webp:1000:1000.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-8",
    "name": "Joanne Moissanite Ring S925 0.14 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.14 CT",
        "price": 31
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhVvp4FCSJ-pTyMm/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/dd408aeab22a4005ba2eae9536233749~tplv-fhlh96nyum-crop-webp:1000:1000.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-9",
    "name": "Azalea Moissanite Ring S925 0.06 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.06 CT",
        "price": 49,
        "originalPrice": 99,
        "discount": "-51%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhVE5T53fd-GPbrR/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/58a39c45bc784d009ed00a54d58517e4~tplv-fhlh96nyum-crop-webp:1000:1000.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-10",
    "name": "Laurel Leaf Moissanite Ring S925 - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.025ct x1",
        "price": 22,
        "originalPrice": 30,
        "discount": "-27%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhVKMQno9w-tJqng/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/7be8ea1196ac441bae15fe8b2f56a935~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-11",
    "name": "Arryn Silver Moissanite Ring S925 - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.015ct x2",
        "price": 29
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhq1b7GpEe-pk2L6/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b3d9e644de2a45b3a84761c798665d14~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-12",
    "name": "Violetta Moissanite Ring S925 0.08 CT - Channel Set - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.08 CT",
        "price": 31,
        "originalPrice": 60,
        "discount": "-48%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhqebvXYKE-rLnjI/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/abbcede00e7e4130861dcc08e8d4bbaf~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-13",
    "name": "Trinity Simple Moissanite Ring S925 - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.03ct x3",
        "price": 31,
        "originalPrice": 60,
        "discount": "-48%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhqeHCFSjT-5YDcP/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/03da1ccbd61e4ee0a9f7e05f8e5f5c2f~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-14",
    "name": "V Shaped Moissanite Ring S925 0.17 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.17 CT",
        "price": 38,
        "originalPrice": 75,
        "discount": "-49%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhqNyP54dj-6i6Jl/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c098ea6a8d6a47cbb8807178e4c329ca~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  }
];

export const earrings: JewelryItem[] = [
  {
    "id": "LoreJ-1",
    "name": "Tulip Moissanite Earrings S925 0.1 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.1 CT",
        "price": 45
      }
    ],
    "url": "https://vm.tiktok.com/ZT9jhPBVcRQ5G-lWYG5/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/ab5c3ec3e0914533955440730b78670a~tplv-fhlh96nyum-crop-webp:1254:1254.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-2",
    "name": "Twin Stars Moissanite Earrings S925 0.01 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.01 CT",
        "price": 58,
        "originalPrice": 120,
        "discount": "-52%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jh5xAFuEeF-mU3T0/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/e392c04257c844079ca69a5d1eeb70f8~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-3",
    "name": "Square Shaped Moissanite Earrings S925 1.0 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT",
        "price": 85
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jh5nM11ppR-LyYqq/",
    "image": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/5fbf83043319455d9b2c01eda6647549~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-4",
    "name": "Cassia Moissanite Earrings S925 0.36 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.03CT x 12",
        "price": 38,
        "originalPrice": 75,
        "discount": "-49%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jh53c85eo2-WeWTi/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/94d475480c15462b9a9e38c6c8ea3086~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-5",
    "name": "Simple Shaped Moissanite Earrings S925 0.3 / 0.5 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.3ct x 2 | 0.5ct x 2",
        "price": 31
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jh5o6n8o4t-ARjJB/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/aabe0d0123c44797803d893d6a62e357~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-6",
    "name": "Irina Drop Moissanite Earrings S925 - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.39 CT x 2",
        "price": 45,
        "originalPrice": 90,
        "discount": "-50%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhaYbx6WNQ-HpOHw/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/eebf7005d2da48e085751b4e630fc341~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-7",
    "name": "Glamour Moissanite Earrings S925 0.9 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.025 CT x 36",
        "price": 45,
        "originalPrice": 90,
        "discount": "-50%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhafUb56DM-VgxVC/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/2eae84fac0614975ab332550f81401e2~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-8",
    "name": "Daisy Moissanite Earrings S925 - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5 CT x 2",
        "price": 58
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhaHkFfV5x-JRWoK/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/15b75038ae93424dad2226c24b0fde18~tplv-fhlh96nyum-crop-webp:1000:1000.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-9",
    "name": "Jaden Moissanite Earrings S925 0.5/1.0 CT - Oval Cut - Lore Jewelry\r",
    "details": "",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5/1.0 CT",
        "price": 83
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhaq3oG3Wn-kdLPq/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/ea6ceda3beb14107a14547cc20f6a4c4~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-10",
    "name": "Moon & Star Silver Moissanite Earrings S925 - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": " Moon (0.01ct x12 + 0.015ct x3) & Star (0.11ct x1 + 0.015ct x14 + 0.01ct x4 + 0.0067ct x4)",
        "price": 51,
        "originalPrice": 105,
        "discount": "-51%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhaskJxWre-I3d7W/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/a86270f30982434e8607a1c3545cf4d1~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-11",
    "name": "Amy Moissanite Earrings S925 - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0,54 CT x 2",
        "price": 51,
        "originalPrice": 105,
        "discount": "-51%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhmJabV814-LJ5tv/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/5daab5609e3947c6943425e7ebc7e893~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-12",
    "name": "Wavy Heart Earrings Moissanite S925 - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5ct x 2 | 0.03ct x 12",
        "price": 51
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhmFGELKuK-FsIeH/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/7aae7e5d7b454fec86b9d8fcaa5ddeab~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-13",
    "name": "Echidna Moissanite Earrings S925 0.3 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.3 CT",
        "price": 71
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhmN41274p-FLeZ9/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c5505d475c1541f38f49d1b336d969c0~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-14",
    "name": "Pricilla Silver Moissanite Earrings S925 - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.06ct x 3 | 0.005ct x 33",
        "price": 45,
        "originalPrice": 90,
        "discount": "-50%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhmy5kxnHR-flv3Z/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b8725edc003f49219160c0091b2c671c~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-15",
    "name": "Isla Vintage Moissanite Earrings S925 0.11 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.11 CT",
        "price": 38,
        "originalPrice": 75,
        "discount": "-49%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhmHNH8rot-pGOap/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/ccd38ad04de74bc08492bda33d8b3e85~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-16",
    "name": "Victoria Moissanite Earrings S925 0.5/1.0 CT - Emerald Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 71
      },
      {
        "label": "1.0",
        "price": 138
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhmnrBxbo5-7SxG9/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/e843a79e7afb404eb0dd5d736c3c47c0~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-17",
    "name": "Clear Round Earring/ Pink Round Earring/ Yellow Round Earring Moissanite Earrings S925 1.0 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone), Clear Round Earrings\nPink Round Earrings\nYellow Round Earrings",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "Clear",
        "price": 78,
        "originalPrice": 165,
        "discount": "-53%"
      },
      {
        "label": "Pink",
        "price": 65
      },
      {
        "label": "Yellow",
        "price": 58
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhudfHJJJG-kyzKZ/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/81842e23e822494a9d17c79381135cbf~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-18",
    "name": "Leticia Moissanite Earrings S925 0.36 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.36 CT",
        "price": 51
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhutqmF7jb-nfdBt/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/86c54882fe754d10991ada976796682e~tplv-fhlh96nyum-crop-webp:790:790.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-19",
    "name": "Raindrops Elegant Moissanite Earrings S925 0.5 CT- Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5 CT",
        "price": 60
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhHdnBbgXn-QdKUM/",
    "image": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/5dd54d831ba64ae3b05701d762448781~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-20",
    "name": "Unique Cross Moissanite Earrings S925 0.36 CT x 2 - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.36 CT x 2",
        "price": 45,
        "originalPrice": 90,
        "discount": "-50%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhHkdUq1wM-eflR6/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/7245fee0ab904765a49e399ac8a4d886~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-21",
    "name": "Belinda Moissanite Earrings S925 - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.0025 CT x52",
        "price": 45
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhHusGTBBK-3iNNg/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/a85288349c124407a7725a26852d54de~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-22",
    "name": "Celia Silver Moissanite Earrings S925 - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.07 CTx 2",
        "price": 51,
        "originalPrice": 105,
        "discount": "-51%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhHgFmmgBr-n2k9y/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/4e0f4e49d3e14f1b86a3b11d39ee729e~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-23",
    "name": "Hamsa Moissanite Earrings S925 - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone), Hamsa Gold\nHamsa Silver",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.0025 CT",
        "price": 58
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhHnaqwdM5-AShsZ/",
    "image": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/1e0e9ae9677c492c9f09fffc7358ab89~tplv-fhlh96nyum-crop-webp:1000:1000.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-24",
    "name": "Kirani Simple Moissanite Earrings S925 0.5ct x2 - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5 CT x 2",
        "price": 45
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jh9KPCANWp-6rZkI/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/5c4d412df6d94599a9addab3c65dd4cf~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  }
];

export const necklaces: JewelryItem[] = [
  {
    "id": "LoreJ-1",
    "name": "Laury Simple Moissanite Necklace S925 0.3 /0.5 / 1.0 /2.0 /3.0 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.3",
        "price": 29
      },
      {
        "label": "0.5",
        "price": 45
      },
      {
        "label": "1.0",
        "price": 58,
        "originalPrice": 120,
        "discount": "-52%"
      },
      {
        "label": "2.0",
        "price": 91
      },
      {
        "label": "3.0",
        "price": 137
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhCEVyxLnq-D6eA2/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/52cc0a52a4284a39a638623a121a4dd0~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-2",
    "name": "Round Silver Moissanite Necklace 0.5CT S925 - Round Cut - Bezel - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5CT",
        "price": 55,
        "originalPrice": 110
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXdqy7xMp-6QfOn/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/135b63e3981d4af5b509e5e9b534b841~tplv-fhlh96nyum-crop-webp:1254:1254.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-3",
    "name": "Strella Black Pearl Moissanite Necklace S925 - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.03 CT X 17 & 0.07 CT",
        "price": 58
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhX1s6fatM-1NJpX/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/a9f3c1ac39414c8bae13e429fc1d8627~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-4",
    "name": "Cross Fleury Moissanite Necklace S925 - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0,5 CT x 1",
        "price": 71,
        "originalPrice": 150,
        "discount": "-53%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhX2jcvYKd-fuC7X/",
    "image": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b78840f93dba488eb97dd5375a289f2c~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-5",
    "name": "Amora Moissanite Necklace 0.5 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5 CT",
        "price": 45
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhX6jopTwG-62Rr1/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/11ddb28f0a73460986239f51546fa56e~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-6",
    "name": "Dragonfly Moissanite Necklace S925 - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone), Dragonfly Gold Necklace\nDragonfly Silver Necklace",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.06CT",
        "price": 58
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXjb47Tku-XfXjZ/",
    "image": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/03e6b44cec284344a69f603b5899a6fa~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-7",
    "name": "Curve Shape Moissanite Necklace S925 0.7 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": " 0.7 CT",
        "price": 36
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXrH363SA-2nl3W/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/55e069be2abf4998be59533261765380~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-8",
    "name": "Cleo Silver Moissanite Necklace S925 1.0 CT- Princess Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT ",
        "price": 51
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXrQfLmKL-Ov4zk/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/9ec54f86b0cd45edbc05ecbe1303f8d5~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-9",
    "name": "Agatha Key Moissanite Necklace S925 0.5/1.0/2.0 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 58
      },
      {
        "label": "1.0",
        "price": 88
      },
      {
        "label": "2.0",
        "price": 118
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXAMXtSWr-raOf5/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/19818e46de44471da8583cd7f4cf3b06~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-10",
    "name": "Savita Moissanite Necklace S925 1.0 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT",
        "price": 51,
        "originalPrice": 105,
        "discount": "-51%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXBTvWSwn-Ib8R8/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/ac473ac3375c48dd9c526327fc7e08f1~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-11",
    "name": "Rhombus Shaped Moissanite Necklace S925 1.0 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT",
        "price": 71,
        "discount": "-53%"
      },
      {
        "label": "1.0 CT",
        "price": 150
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXAdg83cE-zg3DL/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/755ea86d416043e19951d6564038f00e~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-12",
    "name": "Latin Cross Silver Moissanite Necklace S925 - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.72 CT",
        "price": 51,
        "discount": "-51%"
      },
      {
        "label": "0.72 CT",
        "price": 105
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXfvRuRPR-TbpHY/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/d21035b272454221bde01227b14ad2a8~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-13",
    "name": "Floretta Moissanite Necklace S925 1.0 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT+ 0.01ct x 59",
        "price": 71,
        "discount": "-53%"
      },
      {
        "label": "1.0 CT+ 0.01ct x 59",
        "price": 150
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXAdg83c5-ZILWk/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/30c82f8f043841c989c2e9871699ab6d~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-14",
    "name": "Dawn Moissanite Necklace S925 0.5/1.0/2.0 CT - Emerald Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 51,
        "originalPrice": 105,
        "discount": "-51%"
      },
      {
        "label": "1.0",
        "price": 96
      },
      {
        "label": "2.0",
        "price": 131
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXH2SC8qu-DDS8O/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/be6b64ca302845fc9235da18f5cca930~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-15",
    "name": "Violet Moissanite Tennis Necklace S925 0.30 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.30 CT",
        "price": 171
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhX9WkUnnn-NDSul/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/6556b657d2384c69be5a487045177bb6~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-16",
    "name": "Heart Clarity Moissanite Necklace S925 0.3 / 0.5 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.3",
        "price": 56,
        "originalPrice": 81,
        "discount": "-31%"
      },
      {
        "label": "0.5",
        "price": 68
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXQjx9nj3-1udXg/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/136b508a19f74d85912b731e2a62e71a~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-17",
    "name": "Bling Fuji Silver / Gold Moissanite Necklace S925 - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone), Silver\nGold",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "Default",
        "price": 51
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXCMPfPys-kosd4/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f333be39592a47d7a5af9f60a04ed915~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-18",
    "name": "Rebecca Cross Hearts Moissanite Necklace S925 - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.05ctx1 0.01ctx20",
        "price": 71,
        "originalPrice": 120,
        "discount": "-41%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXV1TvN9Q-2NsMn/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/c399b97e94ac47ad895e04cc8625a6e6~tplv-fhlh96nyum-crop-webp:1254:1254.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-19",
    "name": "Alphabet Silver Moissanite Necklace S925 - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone), Specification : A,B,C,E,G,I,J,M,N.L,S,O,P,Y",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.005c CT x 17 until 0.005c CT x 31",
        "price": 45
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXxbSvNeN-bVx3E/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/a1da15889c804b5aa009391595d048f7~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-20",
    "name": "Jaden Moissanite Necklace S925 2.0 CT - Oval Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "2.0 CT",
        "price": 131,
        "originalPrice": 285,
        "discount": "-54%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXpaU1HGS-zKoOI/",
    "image": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/e483021a9ff948b5b0cefce6b49f9bf2~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-21",
    "name": "Anna Luxury Moissanite Necklace S925 0.5/1.0CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone), Anna Pink Luxury \nAnna Luxury ",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "Pink",
        "price": 84,
        "originalPrice": 150,
        "discount": "-44%"
      },
      {
        "label": "Anna Luxury",
        "price": 71
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXGykLR5f-EtA22/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/87d9bd08cfd64a8e930e9ce288a74a58~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-22",
    "name": "Eve Oval Moissanite Necklace S925 0.5/1.0/2.0 CT - Oval Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 58
      },
      {
        "label": "1.0",
        "price": 85
      },
      {
        "label": "2.0",
        "price": 125
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhXt5RvJD6-MkmF2/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/30b045a8b84444afae7f22560a66df16~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  }
];

export const artificial: JewelryItem[] = [
  {
    "id": "LoreJ-1",
    "name": "Pamela Green Emerald Stud Moissanite Earrings S925 1.0 CT - Asscher Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT",
        "price": 111,
        "originalPrice": 240,
        "discount": "-54%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhbj63x2Me-DmanJ/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/2f6800e50681422aaf5155aace34b4ec~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-2",
    "name": "Ginela Oval Green Emerald Moissanite Necklace S925 1.0 CT - Oval Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT",
        "price": 58,
        "originalPrice": 120,
        "discount": "-52%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhbhSJBSrg-r2F1V/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/bfcaa1b3323f4abb8a9c715ef22cd1b6~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  },
  {
    "id": "LoreJ-3",
    "name": "Pamela Green Emerald Moissanite Necklace S925 1.25 CT - Asscher Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone)",
    "material": "D (Colorless stone)",
    "variants": [
      {
        "label": "1.25 CT",
        "price": 98,
        "originalPrice": 210,
        "discount": "-53%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhbBcCVPYg-IT2sS/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/eb16d7613b994ba6a3fd316b0e3fd9b2~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  }
];

export const menRings: JewelryItem[] = [
  {
    "id": "LoreJ-1",
    "name": "Man's Moissanite Ring Series S925 1.0/2.0 CT - Round Cut - Lore Jewelry\r\n",
    "details": "D (Colorless stone), Pabio,Silver Edge,2-Lines Natural,Silver Maximus Luxury,",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "Pabio",
        "price": 65
      },
      {
        "label": "Silver Edge 1.0 CT",
        "price": 65,
        "originalPrice": 135,
        "discount": "-52%"
      },
      {
        "label": "Silver Edge 2.0 CT",
        "price": 98
      },
      {
        "label": "2-Lines Natural 1.0 CT",
        "price": 68,
        "originalPrice": 143,
        "discount": "-52%"
      },
      {
        "label": "Silver Maximus Luxury 1.0 CT",
        "price": 68
      },
      {
        "label": "Silver Maximus Luxury 2.0 CT",
        "price": 111
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhbS3scf8V-RsaJZ/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/eef9cfbabccf4e60839b1329f1f3ce5b~tplv-fhlh96nyum-crop-webp:1000:1000.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast8&from=2378011839"
  }
];

export const bracelets: JewelryItem[] = [
  {
    "id": "LoreJ-1",
    "name": "Grace Silver Moissanite Bracelet S925 - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.06CT x53",
        "price": 137,
        "originalPrice": 299,
        "discount": "-54%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhxaNJdWyY-iKxwB/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/53ff7eece5d8442ca346a402abdf7fce~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-2",
    "name": "Marianne Silver Moissanite Bracelet S925 0.03ct x 40 - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": " 0.03ct x 40",
        "price": 65,
        "originalPrice": 105,
        "discount": "-38%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhxuT4saoq-ABvKz/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/17d291f57f37444fa75c60c31d5f017e~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-3",
    "name": "Rose Gold and Gold Rounded Moissanite Bracelet S925 0.5 / 1.0 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5",
        "price": 38
      },
      {
        "label": "1.0",
        "price": 49
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhxXhk7tR5-BS8AN/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/6fa3170d37d54bcdbb7557858a269630~tplv-fhlh96nyum-crop-webp:1000:1000.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-4",
    "name": "Xavia Simple Moissanite Bracelets S925 0.3 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.3 CT",
        "price": 38,
        "originalPrice": 75,
        "discount": "-49%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhxqNr2CmJ-wGNSW/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/ed86e565f0ca4c0c9a327d6de6319c18~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-5",
    "name": "Xienna Heart Moissanite Bracelet S925 0.6 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.6 CT",
        "price": 38,
        "originalPrice": 75,
        "discount": "-49%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhxG7hunDr-g5tAm/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f6b899fd66d94a5dbd89fc72189c21c7~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-6",
    "name": "Athena Jewelry Accessories Moissanite Bracelet S925 - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT",
        "price": 81,
        "originalPrice": 150,
        "discount": "-46%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhx3juP23S-XGNnH/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f8e84882aa874ee0a0055be0f39fb418~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-7",
    "name": "Xienna Heart Moissanite Bracelet S925 0.6 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.6 CT",
        "price": 38,
        "originalPrice": 75,
        "discount": "-49%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhQetbLPE6-g9FIV/",
    "image": "https://p19-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/f6b899fd66d94a5dbd89fc72189c21c7~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-8",
    "name": "Stardust Moissanite Bracelet S925 1.0 CT - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT",
        "price": 78,
        "originalPrice": 135,
        "discount": "-42%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhQB79g1fN-AuRI9/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/da9300e1ef2a42fd804d9f69a8320213~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-9",
    "name": "Violetta Stargazing Moissanite Bracelet S925 - Round Cut - Lore Jewelry\r",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.1 CT x 44",
        "price": 123
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhQfTyJPyS-M2o41/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/21abbcab233a476ba93770eb406b8b28~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-10",
    "name": "Anastasia Moissanite Silver Bracelet S925 1.0 CT - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "1.0 CT",
        "price": 71,
        "originalPrice": 135,
        "discount": "-47%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhQxA77RL6-oJ6aj/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/bd33a58907094145b5d2b54736dbe2b0~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  },
  {
    "id": "LoreJ-11",
    "name": "Black Flowers Moissanite Bracelet Silver S925 - Round Cut - Lore Jewelry",
    "details": "D (Colorless stone)",
    "material": "Sterling Silver 925",
    "variants": [
      {
        "label": "0.5 CT X 2",
        "price": 71,
        "originalPrice": 150,
        "discount": "-53%"
      }
    ],
    "url": "https://vm.tiktok.com/ZP9jhQqqx9VWb-rkEND/",
    "image": "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/11795fb627a54b9cafaf7967b917c00c~tplv-fhlh96nyum-crop-webp:1000:1000.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839"
  }
];

export const allProducts = [...rings, ...bands, ...earrings, ...necklaces, ...artificial, ...menRings, ...bracelets];

export const products: JewelryItem[] = allProducts.slice(0, 8);
export const newArrivals: JewelryItem[] = allProducts.slice(8, 16);
export const starterProducts: JewelryItem[] = allProducts.slice(16, 20);
export const newCollection: JewelryItem[] = allProducts.slice(20, 28);
