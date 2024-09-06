import { FormTextInput } from "@/components";
import styles from "./edit-supplier-owner-form.module.scss";
import { Control } from "react-hook-form";
import { IEditSupplierFormModel } from "../../models/edit-supplier-form.model";
import { phoneNumberUtils } from "@/utils";
import { FormTitle } from "../form-title/form-title";

type Props = {
  control: Control<IEditSupplierFormModel>;
};

export function EditSupplierOwnerForm({ control }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles["title-box"]}>
        <FormTitle title={"Owner"} />
      </div>

      <div className={styles["main-grid"]}>
        <FormTextInput
          control={control}
          name={"ownerName"}
          label={"Name"}
          required
        />
        <FormTextInput
          control={control}
          name={"ownerEmail"}
          label={"E-mail"}
          type={"email"}
          required
        />
      </div>
      <div className={styles["phone-grid"]}>
        <FormTextInput
          control={control}
          name={"ownerPhoneNumber"}
          label={"Phone Number"}
          required
          formatFn={phoneNumberUtils.format}
        />
      </div>
    </div>
  );
}
