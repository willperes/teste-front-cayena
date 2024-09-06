/* eslint-disable @typescript-eslint/no-namespace */
import { cnpjUtils, phoneNumberUtils } from "@/utils";
import { DetailedSupplierDTO } from "../dtos/detailed-supplier.dto";
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
      cnpj: cnpjUtils.format(dto.cnpj),
      phoneNumber: phoneNumberUtils.format(dto.phoneNumber),
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
