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
  function handleOnChange(value: string, onChangeFn: (value: string) => void) {
    if (value && formatFn) {
      return onChangeFn(formatFn(value));
    }

    return onChangeFn(value);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          value={field.value}
          onChange={(value) =>
            handleOnChange(value.target.value, field.onChange)
          }
          onBlur={field.onBlur}
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
