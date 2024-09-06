import { useEffect, useState } from "react";
import { GetSupplierListUseCase } from "../../../../domain/supplier/use-cases/get-supplier-list.use-case";
import { Supplier } from "@/domain";
import { useRouter } from "next/navigation";

type Props = {
  getSupplierListUseCase: GetSupplierListUseCase;
};

export function useSupplierListTable({ getSupplierListUseCase }: Props) {
  const [supplierList, setSupplierList] = useState<Supplier[]>([]);

  const router = useRouter();

  async function init() {
    try {
      const suppliers = await getSupplierListUseCase.execute();
      setSupplierList(suppliers);
    } catch {
      // TODO: handle error
    }
  }

  useEffect(() => {
    init();
  }, []);

  function navigateToEditSupplier(supplierID: string) {
    router.push(`/edit-supplier/${supplierID}`);
  }

  return { supplierList, navigateToEditSupplier };
}
