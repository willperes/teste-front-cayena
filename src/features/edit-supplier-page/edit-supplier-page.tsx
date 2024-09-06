"use client";

import styles from "./edit-supplier-page.module.scss";
import { Button, CardBox, PageBox, PageHeader } from "@/components";
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
  const { formProps, submitButtonProps } = useEditSupplierPage({
    getSupplierByIdUseCase,
    supplierID,
  });

  return (
    <>
      <PageHeader
        title={"Edit Supplier"}
        TrailingComponent={
          <div className={styles["submit-button-box"]}>
            <Button title={"Submit"} {...submitButtonProps} />
          </div>
        }
      />
      <PageBox>
        <CardBox>
          <EditSupplierForm {...formProps} />
        </CardBox>
      </PageBox>
    </>
  );
}
