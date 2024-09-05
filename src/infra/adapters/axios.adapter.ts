import axios, { AxiosResponse } from "axios";
import { HttpClient, HttpRequest, HttpResponse } from "../http/http";

export class AxiosHttpClientAdapter implements HttpClient {
  private _formatResponse(response: AxiosResponse): HttpResponse {
    return {
      statusCode: response.status,
      data: response.data,
    };
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
      .then(this._formatResponse);
  }
}
