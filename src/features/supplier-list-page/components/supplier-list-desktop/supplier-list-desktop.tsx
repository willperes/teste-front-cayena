import { SupplierListContentProps } from "../supplier-list-content/types";
import styles from "./supplier-list-desktop.module.scss";
import { Button } from "@/components";

export function SupplierListDesktop({
  supplierList,
  navigateToEditSupplier,
}: SupplierListContentProps) {
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th style={{ width: "30%" }}>Name</th>
            <th style={{ width: "20%" }}>CNPJ</th>
            <th style={{ width: "20%" }}>Phone Number</th>
            <th style={{ width: "20%" }}>Owner</th>
            <th style={{ minWidth: 100 }}>Edit</th>
          </tr>
          {supplierList
            ? supplierList.map((supplier) => (
                <tr key={supplier.id}>
                  <td>{supplier.name}</td>
                  <td>{supplier.cnpj}</td>
                  <td>{supplier.phoneNumber}</td>
                  <td>{supplier.owner}</td>
                  <td>
                    <Button
                      data-testid={"supplier-list-item__edit-button"}
                      title={"Edit"}
                      onClick={() => navigateToEditSupplier(supplier.id)}
                    />
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
