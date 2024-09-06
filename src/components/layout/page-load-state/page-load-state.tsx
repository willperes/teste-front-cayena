import { LoadingSpinner } from "@/components/ui";
import styles from "./page-load-state.module.scss";

export function PageLoadState() {
  return (
    <div className={styles.container}>
      <LoadingSpinner className={styles.spinner} size={70} />
    </div>
  );
}
