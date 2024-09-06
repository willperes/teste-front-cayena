import { cnpjUtils } from "@/utils";

export function formatSupplierCNPJ(cnpj: string) {
  const isCnpjValid = cnpjUtils.validate(cnpj);
  return isCnpjValid ? cnpjUtils.format(cnpj) : "";
}
