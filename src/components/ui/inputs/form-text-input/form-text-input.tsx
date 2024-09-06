import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { TextInput, TextInputProps } from "../text-input/text-input";

type Props<FormType extends FieldValues> = {
  formatFn?: (value: string) => string;
} & TextInputProps &
  UseControllerProps<FormType>;

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  formatFn,
  ...textInputProps
}: Props<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          value={field.value && formatFn ? formatFn(field.value) : field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
