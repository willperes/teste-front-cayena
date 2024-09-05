"use client";

import { useId, useRef } from "react";
import styles from "./text-input.module.scss";

export type TextInputProps = {
  label?: string;
  required?: boolean;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextInput({
  label,
  id,
  required,
  errorMessage,
  ...inputProps
}: TextInputProps) {
  const _randomID = useId();
  const _id = useRef(id ?? _randomID).current;

  const inputClasses = [
    styles.input,
    errorMessage ? styles["input--error"] : "",
  ];

  return (
    <div>
      {label ? (
        <label htmlFor={_id} className={styles.label}>
          {label}{" "}
          {required ? (
            <span className={styles["label--required"]}>*</span>
          ) : null}
        </label>
      ) : null}
      <input id={_id} {...inputProps} className={inputClasses.join(" ")} />
      {errorMessage ? (
        <span className={styles["error-message"]}>{errorMessage}</span>
      ) : null}
    </div>
  );
}
