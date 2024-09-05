import { z } from "zod";

export const AuthenticationResponseDTO = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});

export type IAuthenticationResponseDTO = z.infer<
  typeof AuthenticationResponseDTO
>;
