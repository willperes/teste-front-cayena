import { AxiosHttpClientAdapter } from "../adapters/axios.adapter";

export const httpClientFactory = () => new AxiosHttpClientAdapter();
