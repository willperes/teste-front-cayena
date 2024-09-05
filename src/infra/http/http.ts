/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpAuth = {
  username: string;
  password: string;
};

export type HttpRequest = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  body?: any;
  headers?: any;
  auth?: HttpAuth;
};

export type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

export interface HttpClient {
  request: <R = any>(request: HttpRequest) => Promise<HttpResponse<R>>;
}
