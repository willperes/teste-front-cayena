import styles from "./edit-supplier-form.module.scss";

import { Divider } from "@/components";
import { EditSupplierCompanyForm } from "../edit-supplier-company-form/edit-supplier-company-form";
import { EditSupplierOwnerForm } from "../edit-supplier-owner-form/edit-supplier-owner-form";
import { useEditSupplierForm } from "./use-edit-supplier-form";
import { EditSupplierAddressForm } from "../edit-supplier-address-form/edit-supplier-address-form";
import { DetailedSupplier } from "@/domain";

type Props = {
  supplier?: DetailedSupplier;
};
export function EditSupplierForm({ supplier }: Props) {
  const { control } = useEditSupplierForm({ supplier });

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
