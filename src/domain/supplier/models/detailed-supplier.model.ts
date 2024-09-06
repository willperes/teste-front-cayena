/* eslint-disable @typescript-eslint/no-namespace */
import { DetailedSupplierDTO } from "../dtos/detailed-supplier.dto";
import { formatSupplierCNPJ } from "../utils/format-supplier-cnpj";
import { SupplierAddress } from "./supplier-address.model";
import { SupplierInformation } from "./supplier-information.model";
import { SupplierOwner } from "./supplier-owner.model";

export type DetailedSupplier = SupplierInformation & {
  address: SupplierAddress;
  owner: SupplierOwner;
};

export namespace DetailedSupplier {
  export function fromDTO(dto: DetailedSupplierDTO): DetailedSupplier {
    return {
      name: dto.name,
      cnpj: formatSupplierCNPJ(dto.cnpj),
      phoneNumber: dto.phoneNumber,
      address: {
        zipCode: dto.zipCode,
        street: dto.address,
        streetNumber: dto.number,
        complement: dto.complement,
        neighborhood: dto.neighborhood,
        city: dto.city,
        state: dto.state,
      },
      owner: {
        name: dto.ownerName,
        email: dto.ownerEmail,
        phoneNumber: dto.phoneNumber,
      },
    };
  }
}
