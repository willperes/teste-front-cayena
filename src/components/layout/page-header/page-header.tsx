import styles from "./page-header.module.scss";

type Props = {
  title: string;
};

export function PageHeader({ title }: Props) {
  return (
    <header className={styles.container}>
      <h1>{title}</h1>
    </header>
  );
}
