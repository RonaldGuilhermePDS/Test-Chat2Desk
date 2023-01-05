import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";
import { MissingParamError } from "@/presentation/errors/missing-param-error";
import { badRequest } from "@/presentation/helper/http-helper";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError("name"));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError("email"));
    }

    return { statusCode: 200, body: httpRequest.body };
  }
}
