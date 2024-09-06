import { z } from "zod";
import { FormErrorMessages } from "./form-error-messages";
import { BRAZIL_STATES } from "../constants";
import { zipCodeUtils } from "../zip-code-utils";

const state = z
  .string({ required_error: FormErrorMessages.required })
  .refine(
    (state) => BRAZIL_STATES.some((s) => s.acronym === state),
    FormErrorMessages.invalidAddressState
  );

const zipCode = z
  .string({ required_error: FormErrorMessages.required })
  .refine(
    (zipCode) => zipCodeUtils.validate(zipCode),
    FormErrorMessages.invalidZipCode
  );

export const addressValidators = {
  state,
  zipCode,
};
