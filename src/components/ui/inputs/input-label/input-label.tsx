import styles from "./input-label.module.scss";

type Props = {
  label: string;
  htmlFor: string;
  required: boolean;
};

export function InputLabel({ label, htmlFor, required }: Props) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {label}{" "}
      {required ? <span className={styles["label--required"]}>*</span> : null}
    </label>
  );
}
