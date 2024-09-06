import styles from "./loading-spinner.module.scss";

type Props = {
  size?: number;
  className?: string;
};

export function LoadingSpinner({ size = 20, className = "" }: Props) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles["container__spinner"]} ${className}`}
        style={{ height: size, width: size }}
      />
    </div>
  );
}
