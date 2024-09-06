import { z } from "zod";
import { cnpjUtils } from "../cnpj-utils";
import { FormErrorMessages } from "./form-error-messages";

const cnpj = z
  .string()
  .transform((value) => value.replace(/\D/g, ""))
  .refine((_cnpj) => cnpjUtils.validate(_cnpj), FormErrorMessages.invalidCnpj);

export const documentValidators = {
  cnpj,
};
