import styles from "./supplier-list-mobile.module.scss";

import { SupplierListContentProps } from "../supplier-list-content/types";
import { SupplierListMobileItem } from "../supplier-list-mobile-item/supplier-list-mobile-item";
import { Divider } from "@/components";

export function SupplierListMobile({
  supplierList,
  navigateToEditSupplier,
}: SupplierListContentProps) {
  return (
    <div className={styles.container}>
      {supplierList.map((supplier, index) => (
        <div key={supplier.id} className={styles.container}>
          {index !== 0 ? <Divider /> : null}
          <SupplierListMobileItem
            supplier={supplier}
            navigateToEditSupplier={navigateToEditSupplier}
          />
        </div>
      ))}
    </div>
  );
}
