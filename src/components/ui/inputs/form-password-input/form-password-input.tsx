import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import {
  PasswordInput,
  PasswordInputProps,
} from "../password-input/password-input";

type Props<FormType extends FieldValues> = PasswordInputProps &
  UseControllerProps<FormType>;

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: Props<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <PasswordInput
          value={field.value}
          onChange={field.onChange}
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
