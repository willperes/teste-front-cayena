/* eslint-disable @typescript-eslint/no-namespace */
import { cnpjUtils, phoneNumberUtils } from "@/utils";
import { SupplierSummaryDTO } from "../dtos/supplier-summary.dto";

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
      cnpj: cnpjUtils.format(dto.cnpj),
      phoneNumber: phoneNumberUtils.format(dto.phoneNumber),
      owner: dto.ownerName,
    };
  }
}
