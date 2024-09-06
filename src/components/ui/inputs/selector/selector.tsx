"use client";

import { useId, useRef } from "react";
import styles from "./selector.module.scss";
import { InputLabel } from "../input-label/input-label";
import { InputErrorMessage } from "../input-error-message/input-error-message";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TConstraint = Record<string, any>;
export type SelectorProps<T> = {
  label?: string;
  required?: boolean;
  errorMessage?: string;
  options: T[];
  optionLabelKey: keyof T;
  optionValueKey: keyof T;
} & React.InputHTMLAttributes<HTMLSelectElement>;

export function Selector<T extends TConstraint>({
  label,
  id,
  required = false,
  errorMessage,
  options,
  optionLabelKey,
  optionValueKey,
  ...inputProps
}: SelectorProps<T>) {
  const _randomID = useId();
  const _id = useRef(id ?? _randomID).current;

  const selectorClasses = [
    styles["box__selector"],
    errorMessage ? styles["box__selector--error"] : "",
  ];

  return (
    <div>
      {label ? (
        <InputLabel label={label} htmlFor={_id} required={required} />
      ) : null}
      <div className={styles.box}>
        <select id={_id} {...inputProps} className={selectorClasses.join(" ")}>
          {options.map((option) => (
            <option key={option[optionValueKey]} value={option[optionValueKey]}>
              {option[optionLabelKey]}
            </option>
          ))}
        </select>
      </div>
      {errorMessage ? <InputErrorMessage errorMessage={errorMessage} /> : null}
    </div>
  );
}
