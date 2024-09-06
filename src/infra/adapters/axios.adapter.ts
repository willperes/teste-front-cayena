import axios, { AxiosError, AxiosResponse } from "axios";
import { HttpClient, HttpRequest, HttpResponse } from "../http/http-client";
import { HttpError } from "../http";
// import { getSession } from "next-auth/react";

export class AxiosHttpClientAdapter implements HttpClient {
  private _formatResponse(response: AxiosResponse): HttpResponse {
    return {
      statusCode: response.status,
      data: response.data,
    };
  }

  private _formatError(error: AxiosError) {
    const statusCode = error.response?.status ?? 500;
    return new HttpError(statusCode, error.response?.data);
  }

  async request(request: HttpRequest) {
    return axios
      .request({
        url: request.url,
        method: request.method,
        data: request.body,
        headers: request.headers,
        auth: request.auth,
      })
      .then(this._formatResponse)
      .catch((error) => {
        throw this._formatError(error);
      });
  }
}
