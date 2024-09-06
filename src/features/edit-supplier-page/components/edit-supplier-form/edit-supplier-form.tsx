import styles from "./edit-supplier-form.module.scss";

import { Divider } from "@/components";
import { EditSupplierCompanyForm } from "../edit-supplier-company-form/edit-supplier-company-form";
import { EditSupplierOwnerForm } from "../edit-supplier-owner-form/edit-supplier-owner-form";
import { useEditSupplierForm } from "./use-edit-supplier-form";
import { EditSupplierAddressForm } from "../edit-supplier-address-form/edit-supplier-address-form";
import {
  DetailedSupplier,
  UpdateSupplierUseCase,
  UpdateSupplierUseCaseImpl,
} from "@/domain";
import { forwardRef, useImperativeHandle } from "react";

export type EditSupplierFormRef = {
  submitForm: () => void;
};

type Props = {
  supplier?: DetailedSupplier;
  updateSupplierUseCase?: UpdateSupplierUseCase;
  onFormValidStatusChange: (isValid: boolean) => void;
  onFormSubmitting: (isSubmitting: boolean) => void;
};

export const EditSupplierForm = forwardRef<EditSupplierFormRef, Props>(
  (
    {
      supplier,
      updateSupplierUseCase = new UpdateSupplierUseCaseImpl(),
      onFormValidStatusChange,
      onFormSubmitting,
    },
    ref
  ) => {
    const { control, handleSubmit } = useEditSupplierForm({
      supplier,
      updateSupplierUseCase,
      onFormValidStatusChange,
      onFormSubmitting,
    });

    useImperativeHandle(
      ref,
      (): EditSupplierFormRef => ({
        submitForm: () => {
          handleSubmit();
        },
      }),
      [handleSubmit]
    );

    return (
      <form className={styles.form}>
        <EditSupplierCompanyForm control={control} />
        <Divider />
        <EditSupplierOwnerForm control={control} />
        <Divider />
        <EditSupplierAddressForm control={control} />
      </form>
    );
  }
);
