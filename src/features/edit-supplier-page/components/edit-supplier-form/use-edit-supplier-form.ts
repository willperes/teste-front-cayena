import { useForm } from "react-hook-form";
import {
  EditSupplierFormModel,
  IEditSupplierFormModel,
} from "../../models/edit-supplier-form.model";
import { zodResolver } from "@hookform/resolvers/zod";

export function useEditSupplierForm() {
  const { control } = useForm<IEditSupplierFormModel>({
    mode: "onChange",
    resolver: zodResolver(EditSupplierFormModel),
  });

  return {
    control,
  };
}
