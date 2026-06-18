export const EXCHANGE_RATE_USD_TO_MYR = 4.05;

/**
 * Converts an MYR amount to USD.
 * @param myr The amount in Malaysian Ringgit
 * @returns The converted amount in USD
 */
export function convertMyrToUsd(myr: number): number {
  return myr / EXCHANGE_RATE_USD_TO_MYR;
}

/**
 * Formats a given price (assumed to be MYR if numeric) into a USD string.
 * @param price The price to format (number in MYR or pre-formatted string)
 * @returns The formatted USD string (e.g. "USD $12.59")
 */
export function formatPriceUSD(price?: number | string | null): string {
  if (price == null) return "N/A";
  
  if (typeof price === "number") {
    return `USD $${convertMyrToUsd(price).toFixed(2)}`;
  }
  
  // If it's a string, we assume it's either already USD formatted or we need to extract and convert.
  // If it contains 'RM', let's convert it.
  const priceStr = price.toString().toUpperCase();
  if (priceStr.includes('RM')) {
    const numeric = Number(priceStr.replace(/[^0-9.-]+/g, ""));
    if (!isNaN(numeric)) {
      return `USD $${convertMyrToUsd(numeric).toFixed(2)}`;
    }
  }

  // If it has a $ sign, it's likely already USD, just ensure it has USD prefix
  if (priceStr.includes('$')) {
    if (!priceStr.includes('USD')) {
      return `USD ${priceStr}`;
    }
    return priceStr;
  }
  
  // Fallback for random strings
  return priceStr;
}
