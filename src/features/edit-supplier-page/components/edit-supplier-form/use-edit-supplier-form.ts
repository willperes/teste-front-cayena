import { useForm } from "react-hook-form";
import {
  EditSupplierFormModel,
  IEditSupplierFormModel,
} from "../../models/edit-supplier-form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DetailedSupplier,
  IUpdateSupplierDTO,
  UpdateSupplierDTO,
} from "@/domain";
import { useEffect } from "react";
import { cnpjUtils, phoneNumberUtils, zipCodeUtils } from "@/utils";
import { UpdateSupplierUseCase } from "../../../../domain/supplier/use-cases/update-supplier.use-case";
import { useRouter } from "next/navigation";
import { useHandleError } from "@/hooks";

type Props = {
  supplier?: DetailedSupplier;
  updateSupplierUseCase: UpdateSupplierUseCase;
  onFormValidStatusChange: (isValid: boolean) => void;
  onFormSubmitting: (isSubmitting: boolean) => void;
};

export function useEditSupplierForm({
  supplier,
  updateSupplierUseCase,
  onFormValidStatusChange,
  onFormSubmitting,
}: Props) {
  const { handleError } = useHandleError();
  const router = useRouter();
  const { control, formState, handleSubmit, setValue, trigger } =
    useForm<IEditSupplierFormModel>({
      mode: "onChange",
      resolver: zodResolver(EditSupplierFormModel),
    });

  function handleInitialData(supplier: DetailedSupplier) {
    const mappedFormValues: Record<keyof IEditSupplierFormModel, string> = {
      supplierName: supplier.name,
      cnpj: cnpjUtils.format(supplier.cnpj),
      phoneNumber: phoneNumberUtils.format(supplier.phoneNumber),
      ownerName: supplier.owner.name,
      ownerEmail: supplier.owner.email,
      ownerPhoneNumber: phoneNumberUtils.format(supplier.owner.phoneNumber),
      addressStreet: supplier.address.street,
      addressNumber: supplier.address.streetNumber,
      addressComplement: supplier.address.complement,
      addressNeighborhood: supplier.address.neighborhood,
      addressCity: supplier.address.city,
      addressState: supplier.address.state,
      addressZipCode: zipCodeUtils.format(supplier.address.zipCode),
    };

    Object.keys(mappedFormValues).forEach((key) => {
      const objKey = key as keyof typeof mappedFormValues;
      const value = mappedFormValues[objKey];
      if (value) {
        setValue(objKey, value, { shouldDirty: true });
      }
    });

    trigger();
  }

  async function onFormSubmit(formValues: IEditSupplierFormModel) {
    try {
      if (!supplier?.id) {
        throw new Error("Supplier ID is not valid");
      }

      onFormSubmitting(true);

      const dto: IUpdateSupplierDTO = {
        publicId: supplier.id,
        name: formValues.supplierName,
        cnpj: formValues.cnpj,
        phoneNumber: formValues.phoneNumber,
        zipCode: formValues.addressZipCode,
        address: formValues.addressStreet,
        number: formValues.addressNumber,
        complement: formValues.addressComplement,
        neighborhood: formValues.addressNeighborhood,
        city: formValues.addressCity,
        state: formValues.addressState,
        ownerName: formValues.ownerName,
        ownerEmail: formValues.ownerEmail,
        ownerPhoneNumber: formValues.ownerPhoneNumber,
      };
      const parsedDTO = UpdateSupplierDTO.parse(dto);
      await updateSupplierUseCase.execute(parsedDTO);

      router.replace("/");
    } catch (error) {
      handleError(error, {
        errorMessage:
          "An error occurred while trying to update the supplier, please try again",
      });
    } finally {
      onFormSubmitting(false);
    }
  }

  useEffect(() => {
    if (supplier) {
      handleInitialData(supplier);
    }
  }, [supplier]);

  useEffect(() => {
    onFormValidStatusChange(formState.isValid);
  }, [formState.isValid]);

  return {
    control,
    handleSubmit: handleSubmit(onFormSubmit),
  };
}
