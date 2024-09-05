import { IAuthenticationResponseDTO } from "../dtos";

export class AuthenticationResponse {
  accessToken: string;
  refreshToken: string;

  constructor(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  static fromDTO(dto: IAuthenticationResponseDTO): AuthenticationResponse {
    return new AuthenticationResponse(dto.access_token, dto.refresh_token);
  }
}
