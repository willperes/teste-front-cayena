import { FormTextInput, Selector } from "@/components";
import styles from "./edit-supplier-address-form.module.scss";
import { Control, Controller } from "react-hook-form";
import { IEditSupplierFormModel } from "../../models/edit-supplier-form.model";
import { BRAZIL_STATES, zipCodeUtils } from "@/utils";
import { FormTitle } from "../form-title/form-title";

type Props = {
  control: Control<IEditSupplierFormModel>;
};

export function EditSupplierAddressForm({ control }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles["title-box"]}>
        <FormTitle title={"Address"} />
      </div>

      <div className={styles["main-grid"]}>
        <FormTextInput
          control={control}
          name={"addressStreet"}
          label={"Address"}
          required
        />
        <FormTextInput
          control={control}
          name={"addressNumber"}
          label={"Number"}
          required
        />
        <FormTextInput
          control={control}
          name={"addressComplement"}
          label={"Complement"}
        />
      </div>
      <div className={styles["secondary-grid"]}>
        <FormTextInput
          control={control}
          name={"addressNeighborhood"}
          label={"Neighborhood"}
          required
        />
        <FormTextInput
          control={control}
          name={"addressCity"}
          label={"City"}
          required
        />
        <Controller
          control={control}
          name={"addressState"}
          render={({ field, fieldState }) => (
            <Selector
              value={field.value}
              onChange={field.onChange}
              options={BRAZIL_STATES}
              optionLabelKey={"name"}
              optionValueKey={"acronym"}
              label={"State"}
              errorMessage={fieldState.error?.message}
              required
            />
          )}
        />
        <FormTextInput
          control={control}
          name={"addressZipCode"}
          label={"Zip Code"}
          required
          formatFn={zipCodeUtils.format}
        />
      </div>
    </div>
  );
}
