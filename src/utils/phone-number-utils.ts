import { extractDigits } from "./extract-digits";

const PHONE_REGEX = /(\d{2})(\d{4})(\d{4})/;
const CELLPHONE_REGEX = /(\d{2})(\d{5})(\d{4})/;

export function removeFormatting(value: string) {
  return extractDigits(value);
}

export function format(value: string) {
  const cleanPhone = removeFormatting(value);

  if (cleanPhone.length === 11) {
    return cleanPhone.replace(CELLPHONE_REGEX, "($1) $2-$3");
  }

  return cleanPhone.replace(PHONE_REGEX, "($1) $2-$3");
}

export const phoneNumberUtils = {
  removeFormatting,
};
