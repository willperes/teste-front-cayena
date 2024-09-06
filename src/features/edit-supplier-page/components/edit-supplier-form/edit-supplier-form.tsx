import styles from "./edit-supplier-form.module.scss";

import { Divider } from "@/components";
import { EditSupplierCompanyForm } from "../edit-supplier-company-form/edit-supplier-company-form";
import { EditSupplierOwnerForm } from "../edit-supplier-owner-form/edit-supplier-owner-form";
import { useEditSupplierForm } from "./use-edit-supplier-form";
import { EditSupplierAddressForm } from "../edit-supplier-address-form/edit-supplier-address-form";

export function EditSupplierForm() {
  const { control } = useEditSupplierForm();

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
