import { GetSupplierListUseCase } from "../../../../domain/supplier/use-cases/get-supplier-list.use-case";
import { useRouter } from "next/navigation";
import { useFetch } from "@/hooks";

type Props = {
  getSupplierListUseCase: GetSupplierListUseCase;
};

export function useSupplierListTable({ getSupplierListUseCase }: Props) {
  // TODO: handle loading;
  const { data: supplierListData, loading: isLoading } = useFetch({
    fetchFn: () => getSupplierListUseCase.execute(),
  });

  const router = useRouter();

  function navigateToEditSupplier(supplierID: string) {
    router.push(`/edit-supplier/${supplierID}`);
  }

  return { supplierList: supplierListData, isLoading, navigateToEditSupplier };
}
