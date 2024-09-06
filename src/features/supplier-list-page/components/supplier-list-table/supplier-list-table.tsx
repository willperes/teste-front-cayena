import styles from "./supplier-list-table.module.scss";
import { GetSupplierListUseCase, GetSupplierListUseCaseImpl } from "@/domain";
import { useSupplierListTable } from "./use-supplier-list-table";
import { Button, PageLoadState } from "@/components";

type Props = {
  getSupplierListUseCase?: GetSupplierListUseCase;
};

export function SupplierListTable({
  getSupplierListUseCase = new GetSupplierListUseCaseImpl(),
}: Props) {
  const { supplierList, isLoading, navigateToEditSupplier } =
    useSupplierListTable({
      getSupplierListUseCase,
    });
  return (
    <div>
      {isLoading ? <PageLoadState /> : null}

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
