import { HttpClient, httpClientFactory, requestURL } from "@/infra";
import { Supplier } from "../models";
import { ISupplierDTO } from "../dtos/supplier.dto";

export interface GetSupplierListUseCase {
  execute: () => Promise<Supplier[]>;
}

export class GetSupplierListUseCaseImpl implements GetSupplierListUseCase {
  constructor(private readonly httpClient: HttpClient = httpClientFactory()) {}

  execute = async () => {
    const response = await this.httpClient.request<ISupplierDTO[]>({
      url: requestURL.fetchSupplierList,
      method: "get",
    });
    return response.data.map((dto) => Supplier.fromDTO(dto));
  };
}
