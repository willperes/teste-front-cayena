import { GetSupplierListUseCase } from "@/domain";
import { useFetch } from "@/hooks";
import { useRouter } from "next/navigation";

type Props = {
  getSupplierListUseCase: GetSupplierListUseCase;
};

export function useSupplierListContent({ getSupplierListUseCase }: Props) {
  // TODO: handle loading;
  const { data: supplierListData, loading: isLoading } = useFetch({
    fetchFn: () => getSupplierListUseCase.execute(),
  });

  const router = useRouter();

  function navigateToEditSupplier(supplierID: string) {
    router.push(`/edit-supplier/${supplierID}`);
  }

  return {
    isLoading: isLoading || !supplierListData,
    contentProps: {
      navigateToEditSupplier,
    },
    supplierList: supplierListData,
  };
}
