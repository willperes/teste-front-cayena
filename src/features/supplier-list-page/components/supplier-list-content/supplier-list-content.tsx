import { GetSupplierListUseCase, GetSupplierListUseCaseImpl } from "@/domain";
import { useSupplierListContent } from "./use-supplier-list-content";
import { PageLoadState } from "@/components";
import { useBreakpoints } from "@/hooks";
import { SupplierListDesktop } from "../supplier-list-desktop/supplier-list-desktop";
import { SupplierListMobile } from "../supplier-list-mobile/supplier-list-mobile";

type Props = {
  getSupplierListUseCase?: GetSupplierListUseCase;
};

export function SupplierListContent({
  getSupplierListUseCase = new GetSupplierListUseCaseImpl(),
}: Props) {
  const { contentProps, isLoading, supplierList } = useSupplierListContent({
    getSupplierListUseCase,
  });
  const { mdUp } = useBreakpoints();

  return (
    <div>
      {isLoading ? <PageLoadState /> : null}
      {supplierList ? (
        <>
          {mdUp ? (
            <SupplierListDesktop
              supplierList={supplierList}
              {...contentProps}
            />
          ) : (
            <SupplierListMobile supplierList={supplierList} {...contentProps} />
          )}
        </>
      ) : null}
    </div>
  );
}
