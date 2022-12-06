export const formattedToNumber = (num?: string): number => {
  return num ? parseFloat(num.replace(/,/g, "")) : 0;
};

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
