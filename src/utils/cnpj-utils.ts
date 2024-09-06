import { isValidCNPJ, formatCNPJ } from "@brazilian-utils/brazilian-utils";
import { extractDigits } from "./extract-digits";

function removeFormatting(cpfCnpj: string): string {
  return extractDigits(cpfCnpj);
}

function validate(cnpj: string): boolean {
  return isValidCNPJ(removeFormatting(cnpj));
}

function format(cnpj: string): string {
  return formatCNPJ(removeFormatting(cnpj));
}

export const cnpjUtils = {
  removeFormatting,
  validate,
  format,
};
