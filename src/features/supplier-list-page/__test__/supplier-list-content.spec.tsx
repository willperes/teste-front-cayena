import { fireEvent, render, waitFor } from "@testing-library/react";
import { SupplierListContent } from "../components/supplier-list-content/supplier-list-content";
import { GetSupplierListUseCase, SupplierSummary } from "@/domain";
import { useRouter } from "next/navigation";

const supplierSummaryListMock: SupplierSummary[] = [
  {
    id: "3abf56ed-ebbc-4a46-95bd-f83b2ff3b434",
    name: "Heineken",
    cnpj: "06.898.240/0001-31",
    phoneNumber: "(11) 91111-1111",
    owner: "John Doe",
  },
];

const fakeGetSupplierListUseCase: GetSupplierListUseCase = {
  execute: (): Promise<SupplierSummary[]> => {
    return Promise.resolve(supplierSummaryListMock);
  },
};

jest.mock("next/navigation");

describe("<SupplierListContent />", () => {
  const mockedRouterPush = jest.fn();
  const mockedUseRouter = {
    push: mockedRouterPush,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jest.mocked(useRouter).mockReturnValue(mockedUseRouter as any);

  test("it should render and display the suppliers on screen", async () => {
    const { getByText } = render(
      <SupplierListContent
        getSupplierListUseCase={fakeGetSupplierListUseCase}
      />
    );

    await waitFor(() => {
      expect(getByText(supplierSummaryListMock[0].name)).toBeTruthy();
      expect(getByText(supplierSummaryListMock[0].cnpj)).toBeTruthy();
      expect(getByText(supplierSummaryListMock[0].phoneNumber)).toBeTruthy();
      expect(getByText(supplierSummaryListMock[0].owner)).toBeTruthy();
    });
  });

  test("when clicking on the edit button, useRouter should be called to push to edit supplier page", async () => {
    const { findAllByTestId } = render(
      <SupplierListContent
        getSupplierListUseCase={fakeGetSupplierListUseCase}
      />
    );

    const buttonElements = await findAllByTestId(
      "supplier-list-item__edit-button"
    );
    expect(buttonElements.length).toEqual(1);

    fireEvent.click(buttonElements[0]);
    expect(mockedRouterPush).toHaveBeenCalledWith(
      `/edit-supplier/${supplierSummaryListMock[0].id}`
    );
  });
});
