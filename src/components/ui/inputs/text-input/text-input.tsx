"use client";

import { useId, useRef } from "react";
import styles from "./text-input.module.scss";
import { InputLabel } from "../input-label/input-label";
import { InputErrorMessage } from "../input-error-message/input-error-message";

export type TextInputProps = {
  label?: string;
  required?: boolean;
  errorMessage?: string;
  TrailingComponent?: React.ReactElement;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextInput({
  label,
  id,
  required = false,
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
        <InputLabel label={label} htmlFor={_id} required={required} />
      ) : null}
      <div className={styles.box}>
        <input id={_id} {...inputProps} className={inputClasses.join(" ")} />
        {TrailingComponent ? (
          <div className={styles["box__trailing-component"]}>
            {TrailingComponent}
          </div>
        ) : null}
      </div>
      {errorMessage ? <InputErrorMessage errorMessage={errorMessage} /> : null}
    </div>
  );
}
