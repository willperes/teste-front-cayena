import { GetSupplierByIdUseCase } from "@/domain";
import { useFetch } from "@/hooks";

type Props = {
  supplierID: string;
  getSupplierByIdUseCase: GetSupplierByIdUseCase;
};

export function useEditSupplierPage({
  getSupplierByIdUseCase,
  supplierID,
}: Props) {
  const { data: supplierData, loading: isLoadingSupplier } = useFetch({
    fetchFn: () => getSupplierByIdUseCase.execute(supplierID),
  });

  return {
    isLoadingSupplier,
    supplierData,
  };
}
