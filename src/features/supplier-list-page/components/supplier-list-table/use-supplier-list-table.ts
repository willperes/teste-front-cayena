import { useEffect, useState } from "react";
import { GetSupplierListUseCase } from "../../../../domain/supplier/use-cases/get-supplier-list.use-case";
import { Supplier } from "@/domain";

type Props = {
  getSupplierListUseCase: GetSupplierListUseCase;
};

export function useSupplierListTable({ getSupplierListUseCase }: Props) {
  const [supplierList, setSupplierList] = useState<Supplier[]>([]);

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

  return { supplierList };
}
