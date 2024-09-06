import styles from "./input-error-message.module.scss";

type Props = {
  errorMessage: string;
};

export function InputErrorMessage({ errorMessage }: Props) {
  return <span className={styles["error-message"]}>{errorMessage}</span>;
}
