import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";

export interface Controller {
  handle: (httpRequest: HttpRequest) => HttpResponse;
}
