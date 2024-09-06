import { extractDigits } from "./extract-digits";

const PHONE_REGEX = /(\d{2})(\d{4})(\d{4})/;
const CELLPHONE_REGEX = /(\d{2})(\d{5})(\d{4})/;

function removeFormatting(value: string) {
  return extractDigits(value);
}

function format(value: string) {
  const cleanPhone = removeFormatting(value);

  if (cleanPhone.length > 11) {
    return cleanPhone.slice(0, 11).replace(CELLPHONE_REGEX, "($1) $2-$3");
  }

  if (cleanPhone.length === 11) {
    return cleanPhone.replace(CELLPHONE_REGEX, "($1) $2-$3");
  }

  return cleanPhone.replace(PHONE_REGEX, "($1) $2-$3");
}

export const phoneNumberUtils = {
  removeFormatting,
  format,
};
