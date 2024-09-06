import { HttpClient, httpClientFactory, requestURL } from "@/infra";
import { IUpdateSupplierDTO } from "../dtos";
import { DetailedSupplier } from "../models";
import { DetailedSupplierDTO } from "../dtos/detailed-supplier.dto";

export interface UpdateSupplierUseCase {
  execute: (dto: IUpdateSupplierDTO) => Promise<DetailedSupplier>;
}

export class UpdateSupplierUseCaseImpl implements UpdateSupplierUseCase {
  constructor(private readonly httpClient: HttpClient = httpClientFactory()) {}

  execute = async (dto: IUpdateSupplierDTO) => {
    const result = await this.httpClient.request<DetailedSupplierDTO>({
      url: requestURL.updateSupplier,
      method: "put",
      body: dto,
    });
    return DetailedSupplier.fromDTO(result.data);
  };
}
