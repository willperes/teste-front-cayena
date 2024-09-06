import { z } from "zod";
import { FormErrorMessages } from "./form-error-messages";

type RequiredStringProps = {
  minLength?: number;
  maxLength?: number;
};

export function requiredStringValidator({
  minLength = 1,
  maxLength,
}: RequiredStringProps = {}) {
  const baseValidator = z.string({
    required_error: FormErrorMessages.required,
  });

  if (minLength === 1) {
    return baseValidator.min(1, FormErrorMessages.required);
  }

  const baseMinLengthValidator = baseValidator.min(
    minLength,
    FormErrorMessages.minLength(minLength)
  );
  if (!maxLength) {
    return baseMinLengthValidator;
  }

  return baseMinLengthValidator.max(
    maxLength,
    FormErrorMessages.maxLength(maxLength)
  );
}
