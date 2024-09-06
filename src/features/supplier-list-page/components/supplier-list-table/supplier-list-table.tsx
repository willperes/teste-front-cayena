import { GetSupplierListUseCase, GetSupplierListUseCaseImpl } from "@/domain";
import { useSupplierListTable } from "./use-supplier-list-table";

type Props = {
  getSupplierListUseCase?: GetSupplierListUseCase;
};

export function SupplierListTable({
  getSupplierListUseCase = new GetSupplierListUseCaseImpl(),
}: Props) {
  const { supplierList } = useSupplierListTable({ getSupplierListUseCase });

  return <div></div>;
}
