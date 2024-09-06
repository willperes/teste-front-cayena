import { useForm } from "react-hook-form";
import {
  EditSupplierFormModel,
  IEditSupplierFormModel,
} from "../../models/edit-supplier-form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { DetailedSupplier } from "@/domain";
import { useEffect } from "react";
import { cnpjUtils, phoneNumberUtils, zipCodeUtils } from "@/utils";

type Props = {
  supplier?: DetailedSupplier;
};

export function useEditSupplierForm({ supplier }: Props) {
  const { control, setValue, trigger } = useForm<IEditSupplierFormModel>({
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

  useEffect(() => {
    if (supplier) {
      handleInitialData(supplier);
    }
  }, [supplier]);

  return {
    control,
  };
}
