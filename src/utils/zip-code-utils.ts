import { extractDigits } from "./extract-digits";

function removeFormatting(value: string) {
  return extractDigits(value);
}

function validate(zipCode: string) {
  return removeFormatting(zipCode).length === 8;
}

function format(zipCode: string) {
  const cleanZipCode = removeFormatting(zipCode);
  if (cleanZipCode.length > 8) {
    return cleanZipCode.slice(0, 8).replace(/(\d{5})(\d{3})/, "$1-$2");
  }

  return cleanZipCode.replace(/(\d{5})(\d{3})/, "$1-$2");
}

export const zipCodeUtils = {
  format,
  removeFormatting,
  validate,
};
