import { cnpjUtils } from "@/utils";
import { ISupplierDTO } from "../dtos/supplier.dto";

export type Supplier = {
  id: string;
  name: string;
  cnpj: string;
  phoneNumber: string;
  owner: string;
};

export namespace Supplier {
  export function fromDTO(dto: ISupplierDTO): Supplier {
    const isCnpjValid = cnpjUtils.validate(dto.cnpj);
    const cnpj = isCnpjValid ? cnpjUtils.format(dto.cnpj) : "";

    return {
      id: dto.publicId,
      name: dto.name,
      cnpj,
      phoneNumber: dto.phoneNumber,
      owner: dto.ownerName,
    };
  }
}
