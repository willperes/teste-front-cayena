import { PageHead } from "@/components";
import { EditSupplierPage } from "@/features";
import { useRouter } from "next/router";

export default function EditSupplier() {
  const { query } = useRouter();

  const supplierId = query.id;
  if (typeof supplierId !== "string") {
    return <div></div>;
  }

  return (
    <>
      <PageHead title={"Edit supplier"} />
      <EditSupplierPage supplierID={supplierId} />
    </>
  );
}
