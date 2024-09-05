import styles from "./password-input.module.scss";
import { useState } from "react";
import { TextInput, TextInputProps } from "../text-input/text-input";
import { Icon } from "../../icon/icon";

export type PasswordInputProps = Omit<TextInputProps, "TrailingComponent">;

export function PasswordInput({ ...textInputProps }: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry((prev) => !prev);
  }

  return (
    <TextInput
      {...textInputProps}
      type={isSecureTextEntry ? "password" : "text"}
      TrailingComponent={
        <button
          type={"button"}
          onClick={toggleSecureTextEntry}
          className={styles.button}
        >
          <Icon
            name={isSecureTextEntry ? "eyeOffIcon" : "eyeOnIcon"}
            className={styles["button__icon"]}
          />
        </button>
      }
    />
  );
}
