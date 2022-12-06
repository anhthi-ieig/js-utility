/**
 * Remove formatted number to real number
 * @param num 1,000
 * @returns 1000
 */

export const formattedToNumber = (num?: string): number => {
  return num ? parseFloat(num.replace(/,/g, "")) : 0;
};

/**
 * Remove all unexpected zero in decimal fraction
 * @param num 1.100
 * @returns 1.1
 */

export const trimDecimalZero = (num: string): string => {
  const isDecimal = num.indexOf(".") >= 0;
  return isDecimal ? num.replace(/0+$/, "") : num;
};

/**
 * Round number
 * @param num 80.69999999999999
 * @returns 80.7
 */

export const roundEpsilon = (num: number): number => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

/**
 * Format number to abbreviate number
 * @param num 1000000
 * @returns 1M
 */

export const abbreviateNumber = (num: number): string => {
  if (!num) {
    return "";
  }

  if (num < 1000000) {
    return num.toString();
  }

  const wholeNum = `${num}`.split(".")[0];
  const thousandPowNum = Math.floor(wholeNum.length / 3.1);
  const thousandNum = Math.pow(1000, thousandPowNum);
  const abbreviateNum = (num / thousandNum).toString();
  const indexOfDot = abbreviateNum.indexOf(".");
  const abbreviateNumWith2Decimal =
    indexOfDot === -1 ? abbreviateNum : abbreviateNum.slice(0, indexOfDot + 3);
  const suffix = ["", "", "M", "B", "T"][thousandPowNum];

  return `${abbreviateNumWith2Decimal}${suffix}`;
};

/**
 *
 * @param num source number
 * @param fulfillDecimalNum expected decimal length
 * @returns fulfilled decimal of source number
 */

export const fulfillDecimal = (
  num: string,
  minimalDecimalLength: number = 2
): string => {
  const [wholeNum, decimal] = trimDecimalZero(num).split(".");

  if (!decimal) {
    return `${wholeNum}.${"0".repeat(minimalDecimalLength)}`;
  }

  const fulfillZeroLength =
    decimal.length <= minimalDecimalLength
      ? minimalDecimalLength - decimal.length
      : decimal.length;
  const fulfillZero = "0".repeat(fulfillZeroLength);

  const fulfilledDecimal =
    decimal.length < minimalDecimalLength
      ? `${decimal}${fulfillZero}`
      : decimal;

  return `${wholeNum}.${fulfilledDecimal}`;
};
