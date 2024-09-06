import { EditSupplierCompanyForm } from "../edit-supplier-company-form/edit-supplier-company-form";
import { useEditSupplierForm } from "./use-edit-supplier-form";

export function EditSupplierForm() {
  const { control } = useEditSupplierForm();

  return (
    <div>
      <EditSupplierCompanyForm control={control} />
    </div>
  );
}
