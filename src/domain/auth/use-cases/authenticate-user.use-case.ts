import { HttpClient, httpClientFactory, localRequestURL } from "@/infra";
import { ISubmitLogInDTO } from "../dtos";

type AuthenticateUserUseCaseData = Pick<
  ISubmitLogInDTO,
  "username" | "password"
>;

export interface AuthenticateUserUseCase {
  execute: (data: AuthenticateUserUseCaseData) => Promise<boolean>;
}

export class AuthenticateUserUseCaseImpl implements AuthenticateUserUseCase {
  constructor(private readonly httpClient: HttpClient = httpClientFactory()) {}

  execute = async (data: AuthenticateUserUseCaseData) => {
    const requestBody: ISubmitLogInDTO = {
      ...data,
      grant_type: "password",
      scope: "web",
    };

    const response = await this.httpClient.request<boolean>({
      url: localRequestURL.authenticateUser,
      method: "post",
      body: requestBody,
    });
    return response.data;
  };
}
