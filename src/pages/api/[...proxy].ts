import {
  HttpClient,
  httpClientFactory,
  HttpError,
  HttpMethod,
  HttpRequest,
  makeBaseURL,
} from "@/infra";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { proxy } = req.query;

  if (!proxy) {
    return res.status(400).json({ error: "No proxy endpoint specified" });
  }

  let requestURL = "";
  if (typeof proxy === "string") {
    requestURL = makeBaseURL(proxy);
  } else if (Array.isArray(proxy)) {
    requestURL = makeBaseURL(proxy.join("/"));
  }

  if (requestURL.includes("/api/proxy")) {
    return res.status(400).json({ error: "Invalid proxy endpoint" });
  }

  requestURL = requestURL.replace("/proxy", "");

  const httpClient: HttpClient = httpClientFactory();
  const { session: token } = cookie.parse(req.headers.cookie ?? "");

  try {
    const request: HttpRequest = {
      url: requestURL,
      body: req.body ?? undefined,
      method: req.method ? (req.method.toLowerCase() as HttpMethod) : "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const result = await httpClient.request(request).then((res) => res.data);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.statusCode).json(error.data);
    }

    throw error;
  }
}
