/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class Error {
  statusCode: number;
  data: any;
  name: string;

  constructor(statusCode: number, body: any, name: string) {
    this.statusCode = statusCode;
    this.data = body;
    this.name = name;
  }
}
