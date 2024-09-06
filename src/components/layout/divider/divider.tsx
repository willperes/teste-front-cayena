import styles from "./divider.module.scss";

type Props = {
  color?: string;
};

export function Divider({ color }: Props) {
  return <div className={styles.divider} style={{ backgroundColor: color }} />;
}
