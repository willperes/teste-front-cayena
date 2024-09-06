import { isValidCNPJ, formatCNPJ } from "@brazilian-utils/brazilian-utils";

function removeFormatting(cpfCnpj: string): string {
  return cpfCnpj.replace(/\D/g, "");
}

function validate(cnpj: string): boolean {
  return isValidCNPJ(removeFormatting(cnpj));
}

function format(cnpj: string): string {
  const cnpjWithoutFormatting = removeFormatting(cnpj);
  return formatCNPJ(cnpj);
}

export const cnpjUtils = {
  removeFormatting,
  validate,
  format,
};
