import { z } from "zod";
import { FormErrorMessages } from "./form-error-messages";

export const phoneNumberValidator = z
  .string({ required_error: FormErrorMessages.required })
  .transform((value) => value.replace(/\D/g, ""))
  .refine(
    (phoneNumber) => [10, 11].includes(phoneNumber.length),
    FormErrorMessages.invalidPhoneNumber
  );
