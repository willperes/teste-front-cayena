import { CardBox, PageBox } from "@/components";
import { SupplierListTable } from "./components/supplier-list-table/supplier-list-table";

export function SupplierListPage() {
  return (
    <PageBox>
      <CardBox>
        <SupplierListTable />
      </CardBox>
    </PageBox>
  );
}
