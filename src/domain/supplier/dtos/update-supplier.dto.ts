import {
  addressValidators,
  documentValidators,
  phoneNumberValidator,
} from "@/utils";
import { z } from "zod";

export const UpdateSupplierDTO = z.object({
  publicId: z.string().uuid(),
  name: z.string().min(5),
  cnpj: documentValidators.cnpj,
  phoneNumber: phoneNumberValidator,
  zipCode: addressValidators.zipCode,
  address: z.string().min(5),
  number: z.string().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  state: addressValidators.state,
  ownerName: z.string().min(5),
  ownerEmail: z.string().email(),
  ownerPhoneNumber: phoneNumberValidator,
});

export type IUpdateSupplierDTO = z.infer<typeof UpdateSupplierDTO>;
