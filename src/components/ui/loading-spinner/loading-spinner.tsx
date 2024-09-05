import styles from "./loading-spinner.module.scss";

type Props = {
  size?: number;
};

export function LoadingSpinner({ size = 20 }: Props) {
  return (
    <div className={styles.container}>
      <div
        className={styles["container__spinner"]}
        style={{ height: size, width: size }}
      />
    </div>
  );
}
