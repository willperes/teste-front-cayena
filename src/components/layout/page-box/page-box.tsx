import styles from "./page-box.module.scss";

export function PageBox({ children }: React.PropsWithChildren) {
  return (
    <main>
      <div className={styles.container}>{children}</div>
    </main>
  );
}
