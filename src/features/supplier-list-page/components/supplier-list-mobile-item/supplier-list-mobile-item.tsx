import styles from "./supplier-list-mobile.module.scss";
import { SupplierSummary } from "@/domain";
import { SupplierListContentProps } from "../supplier-list-content/types";
import { Button } from "@/components";

type Props = {
  supplier: SupplierSummary;
  navigateToEditSupplier: SupplierListContentProps["navigateToEditSupplier"];
};

export function SupplierListMobileItem({
  supplier,
  navigateToEditSupplier,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles["container__inner-box"]}>
        <div>
          <p className={styles["inner-box__supplier-name-text"]}>
            {supplier.name}
          </p>
          <p className={styles["inner-box__supplier-secondary-text"]}>
            {supplier.cnpj}
          </p>
        </div>
        <div>
          <p className={styles["inner-box__supplier-name-text"]}>
            {supplier.owner}
          </p>
          <p className={styles["inner-box__supplier-secondary-text"]}>
            {supplier.phoneNumber}
          </p>
        </div>
      </div>

      <div className={styles["container__button-box"]}>
        <Button
          data-testid={"supplier-list-mobile-item__edit-button"}
          title={"Edit"}
          onClick={() => navigateToEditSupplier(supplier.id)}
        />
      </div>
    </div>
  );
}
