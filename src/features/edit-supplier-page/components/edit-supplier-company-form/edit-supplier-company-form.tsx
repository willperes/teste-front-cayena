import { FormTextInput } from "@/components";
import styles from "./edit-supplier-company-form.module.scss";
import { Control } from "react-hook-form";
import { IEditSupplierFormModel } from "../../models/edit-supplier-form.model";
import { cnpjUtils, phoneNumberUtils } from "@/utils";

type Props = {
  control: Control<IEditSupplierFormModel>;
};

export function EditSupplierCompanyForm({ control }: Props) {
  return (
    <>
      <div className={styles["main-grid"]}>
        <FormTextInput
          control={control}
          name={"supplierName"}
          label={"Name"}
          required
        />
        <FormTextInput
          control={control}
          name={"cnpj"}
          label={"CNPJ"}
          required
          formatFn={cnpjUtils.format}
        />
      </div>
      <div className={styles["phone-grid"]}>
        <FormTextInput
          control={control}
          name={"phoneNumber"}
          label={"Phone Number"}
          required
          formatFn={phoneNumberUtils.format}
        />
      </div>
    </>
  );
}
