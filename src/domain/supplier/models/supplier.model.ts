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
    return {
      id: dto.publicId,
      name: dto.name,
      cnpj: dto.cnpj,
      phoneNumber: dto.phoneNumber,
      owner: dto.ownerName,
    };
  }
}
