import { Error } from "./error";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpAuth = {
  username: string;
  password: string;
};

export type HttpMethod = "get" | "post" | "put" | "delete";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
  auth?: HttpAuth;
};

export type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

export class HttpError implements Error {
  statusCode: number;
  data: any;
  name: string;

  constructor(statusCode: number, body: any) {
    this.statusCode = statusCode;
    this.data = body;
    this.name = "HttpError";
  }
}

export interface HttpClient {
  request: <R = any>(request: HttpRequest) => Promise<HttpResponse<R>>;
}
