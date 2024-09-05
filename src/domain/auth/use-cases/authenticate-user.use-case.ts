import { HttpClient, httpClientFactory, requestURL } from "@/infra";
import { IAuthenticationResponseDTO, ISubmitLogInDTO } from "../dtos";
import { AuthenticationResponse } from "../models/authentication-response.model";

type AuthenticateUserUseCaseData = Pick<
  ISubmitLogInDTO,
  "username" | "password"
>;

export interface AuthenticateUserUseCase {
  execute: (
    data: AuthenticateUserUseCaseData
  ) => Promise<AuthenticationResponse>;
}

export class AuthenticateUserUseCaseImpl implements AuthenticateUserUseCase {
  constructor(private readonly httpClient: HttpClient = httpClientFactory()) {}

  execute = async (data: AuthenticateUserUseCaseData) => {
    const requestBody: ISubmitLogInDTO = {
      ...data,
      grant_type: "password",
      scope: "web",
    };

    const response = await this.httpClient.request<IAuthenticationResponseDTO>({
      url: requestURL.authenticateUser,
      method: "post",
      body: requestBody,
    });
    return AuthenticationResponse.fromDTO(response.data);
  };
}
