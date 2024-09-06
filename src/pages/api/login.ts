import { IAuthenticationResponseDTO, SubmitLogInDTO } from "@/domain";
import {
  authRequestURL,
  httpClientFactory,
  HttpClient,
  HttpError,
} from "@/infra";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<boolean>
) {
  if (req.method !== "POST") {
    throw new Error("not-implemented");
  }

  const parsedBody = SubmitLogInDTO.safeParse(req.body);
  if (!parsedBody.success) {
    throw new Error("bad-request");
  }

  const form = new FormData();
  form.append("username", parsedBody.data.username);
  form.append("password", parsedBody.data.password);
  form.append("scope", parsedBody.data.scope);
  form.append("grant_type", parsedBody.data.grant_type);

  const httpClient: HttpClient = httpClientFactory();
  try {
    const result = await httpClient
      .request<IAuthenticationResponseDTO>({
        url: authRequestURL.fetchToken,
        body: req.body,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        auth: {
          username: process.env.BASIC_USERNAME ?? "",
          password: process.env.BASIC_PASSWORD ?? "",
        },
      })
      .then((res) => res.data);

    const cookie = serialize("session", result.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: result.expires_in,
      path: "/",
    });
    res.setHeader("Set-Cookie", cookie);
    res.status(200).json(true);
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.statusCode).json(error.data);
    }

    throw error;
  }
}
