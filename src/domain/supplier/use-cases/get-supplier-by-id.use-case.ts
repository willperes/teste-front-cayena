import { HttpClient, httpClientFactory, requestURL } from "@/infra";
import { DetailedSupplier } from "../models";
import { DetailedSupplierDTO } from "../dtos/detailed-supplier.dto";

export interface GetSupplierByIdUseCase {
  execute: (supplierID: string) => Promise<DetailedSupplier>;
}

export class GetSupplierByIdUseCaseImpl implements GetSupplierByIdUseCase {
  constructor(private readonly httpClient: HttpClient = httpClientFactory()) {}

  execute = async (supplierID: string) => {
    const response = await this.httpClient.request<DetailedSupplierDTO>({
      url: requestURL.fetchSupplierById.replace("{{id}}", supplierID),
      method: "get",
    });
    return DetailedSupplier.fromDTO(response.data);
  };
}
