"use client";

import { CardBox, PageBox, PageHeader } from "@/components";
import { SupplierListContent } from "./components/supplier-list-content/supplier-list-content";

export function SupplierListPage() {
  return (
    <>
      <PageHeader title={"Suppliers"} />
      <PageBox>
        <CardBox>
          <SupplierListContent />
        </CardBox>
      </PageBox>
    </>
  );
}
