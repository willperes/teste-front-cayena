"use client";

import { useId, useRef } from "react";
import styles from "./text-input.module.scss";

export type TextInputProps = {
  label?: string;
  required?: boolean;
  errorMessage?: string;
  TrailingComponent?: React.ReactElement;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextInput({
  label,
  id,
  required,
  errorMessage,
  TrailingComponent,
  ...inputProps
}: TextInputProps) {
  const _randomID = useId();
  const _id = useRef(id ?? _randomID).current;

  const inputClasses = [
    styles["box__input"],
    errorMessage ? styles["box__input--error"] : "",
    TrailingComponent ? styles["box__input--trailing-component"] : "",
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
      <div className={styles.box}>
        <input id={_id} {...inputProps} className={inputClasses.join(" ")} />
        {TrailingComponent ? (
          <div className={styles["box__trailing-component"]}>
            {TrailingComponent}
          </div>
        ) : null}
      </div>
      {errorMessage ? (
        <span className={styles["error-message"]}>{errorMessage}</span>
      ) : null}
    </div>
  );
}
