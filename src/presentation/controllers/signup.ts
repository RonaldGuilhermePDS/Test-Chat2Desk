import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";
import { MissingParamError } from "@/presentation/errors/missing-param-error";
import { badRequest } from "@/presentation/helper/http-helper";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      "name",
      "email",
      "password",
      "passwordConfirmation",
    ];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    return { statusCode: 200, body: httpRequest.body };
  }
}
