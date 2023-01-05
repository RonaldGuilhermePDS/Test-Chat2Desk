import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";
import { MissingParamError } from "@/presentation/errors/missing-param-error";
import { badRequest } from "@/presentation/helper/http-helper";
import { Controller } from "@/presentation/protocols/controller";
import { EmailValidator } from "@/presentation/protocols/emailValidator";
import { InvalidParamError } from "@/presentation/errors/invalid-param-error";

export class SignUpController implements Controller {
  private readonly emailValitador: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValitador = emailValidator;
  }

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

    const isValid = this.emailValitador.isValid(httpRequest.body.email);

    if (!isValid) {
      return badRequest(new InvalidParamError("email"));
    }

    return { statusCode: 200, body: httpRequest.body };
  }
}
