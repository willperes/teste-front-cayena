"use client";

import { CardBox, PageBox, PageHeader } from "@/components";
import { useEditSupplierPage } from "./use-edit-supplier-page";
import { GetSupplierByIdUseCase, GetSupplierByIdUseCaseImpl } from "@/domain";
import { EditSupplierForm } from "./components/edit-supplier-form/edit-supplier-form";

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
          <EditSupplierForm />
        </CardBox>
      </PageBox>
    </>
  );
}
