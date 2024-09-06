import { HttpClient, httpClientFactory, requestURL } from "@/infra";
import { SupplierSummary } from "../models";
import { SupplierSummaryDTO } from "../dtos/supplier-summary.dto";

export interface GetSupplierListUseCase {
  execute: () => Promise<SupplierSummary[]>;
}

export class GetSupplierListUseCaseImpl implements GetSupplierListUseCase {
  constructor(private readonly httpClient: HttpClient = httpClientFactory()) {}

  execute = async () => {
    const response = await this.httpClient.request<SupplierSummaryDTO[]>({
      url: requestURL.fetchSupplierList,
      method: "get",
    });
    return response.data.map((dto) => SupplierSummary.fromDTO(dto));
  };
}
