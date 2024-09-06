import {
  addressValidators,
  documentValidators,
  FormErrorMessages,
  phoneNumberValidator,
  requiredStringValidator,
} from "@/utils";
import { z } from "zod";

export const EditSupplierFormModel = z.object({
  supplierName: requiredStringValidator({ minLength: 5 }),
  cnpj: documentValidators.cnpj,
  phoneNumber: phoneNumberValidator,
  ownerName: requiredStringValidator({ minLength: 5 }),
  ownerEmail: z.string().email(FormErrorMessages.invalidEmail),
  ownerPhoneNumber: phoneNumberValidator,
  addressStreet: requiredStringValidator({ minLength: 5 }),
  addressNumber: requiredStringValidator(),
  addressComplement: z.string().optional(),
  addressNeighborhood: requiredStringValidator(),
  addressCity: requiredStringValidator(),
  addressState: addressValidators.state,
  addressZipCode: addressValidators.zipCode,
});
