/* eslint-disable @typescript-eslint/no-namespace */
import { SupplierSummaryDTO } from "../dtos/supplier-summary.dto";
import { formatSupplierCNPJ } from "../utils/format-supplier-cnpj";

export type SupplierSummary = {
  id: string;
  name: string;
  cnpj: string;
  phoneNumber: string;
  owner: string;
};

export namespace SupplierSummary {
  export function fromDTO(dto: SupplierSummaryDTO): SupplierSummary {
    return {
      id: dto.publicId,
      name: dto.name,
      cnpj: formatSupplierCNPJ(dto.cnpj),
      phoneNumber: dto.phoneNumber,
      owner: dto.ownerName,
    };
  }
}
