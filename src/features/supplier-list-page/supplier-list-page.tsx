"use client";

import { CardBox, PageBox, PageHeader, PageLoadState } from "@/components";
import { SupplierListTable } from "./components/supplier-list-table/supplier-list-table";

export function SupplierListPage() {
  return (
    <>
      <PageHeader title={"Suppliers"} />
      <PageBox>
        <CardBox>
          <SupplierListTable />
        </CardBox>
      </PageBox>
    </>
  );
}
