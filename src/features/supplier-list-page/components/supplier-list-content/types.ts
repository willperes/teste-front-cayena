import { SupplierSummary } from "@/domain";

export type SupplierListContentProps = {
  supplierList: SupplierSummary[];
  navigateToEditSupplier: (supplierID: string) => void;
};
