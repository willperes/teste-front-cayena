import styles from "./page-box.module.scss";

export function PageBox({ children }: React.PropsWithChildren) {
  return <main className={styles.container}>{children}</main>;
}
