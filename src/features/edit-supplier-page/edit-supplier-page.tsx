"use client";

import { CardBox, PageBox, PageHeader } from "@/components";
import { useEditSupplierPage } from "./use-edit-supplier-page";
import { GetSupplierByIdUseCase, GetSupplierByIdUseCaseImpl } from "@/domain";

type Props = {
  supplierID: string;
  getSupplierByIdUseCase?: GetSupplierByIdUseCase;
};

export function EditSupplierPage({
  supplierID,
  getSupplierByIdUseCase = new GetSupplierByIdUseCaseImpl(),
}: Props) {
  const {} = useEditSupplierPage({ getSupplierByIdUseCase, supplierID });

  return (
    <>
      <PageHeader title={"Edit Supplier"} />
      <PageBox>
        <CardBox>
          <h1>Supplier: {supplierID}</h1>
        </CardBox>
      </PageBox>
    </>
  );
}
