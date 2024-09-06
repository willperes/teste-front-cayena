import styles from "./page-header.module.scss";

type Props = {
  title: string;
  TrailingComponent?: React.ReactElement;
};

export function PageHeader({ title, TrailingComponent }: Props) {
  return (
    <header className={styles.container}>
      <h1>{title}</h1>
      {TrailingComponent ?? null}
    </header>
  );
}
