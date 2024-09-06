import { GetSupplierByIdUseCase } from "@/domain";
import { useFetch } from "@/hooks";
import { useRef, useState } from "react";
import { EditSupplierFormRef } from "./components/edit-supplier-form/edit-supplier-form";

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

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const formRef = useRef<EditSupplierFormRef>(null);

  function onFormValidStatusChange(isValid: boolean) {
    setIsSubmitButtonDisabled(!isValid);
  }

  function onFormSubmitting(isSubmitting: boolean) {
    setIsFormSubmitting(isSubmitting);
  }

  function handleSubmitForm() {
    formRef.current?.submitForm();
  }

  return {
    isLoadingSupplier,
    formProps: {
      ref: formRef,
      supplier: supplierData,
      onFormValidStatusChange,
      onFormSubmitting,
    },
    submitButtonProps: {
      disabled: isSubmitButtonDisabled,
      loading: isFormSubmitting,
      onClick: () => handleSubmitForm(),
    },
  };
}
