"use client";

import { CardBox, PageBox, PageHeader } from "@/components";

type Props = {
  supplierID: string;
};

export function EditSupplierPage({ supplierID }: Props) {
  return (
    <>
      <PageHeader title={"Edit Supplier"} />
      <PageBox>
        <CardBox>
          <h1>Supplier: {supplierID}</h1>
        </CardBox>
      </PageBox>
    </>
  );
}
