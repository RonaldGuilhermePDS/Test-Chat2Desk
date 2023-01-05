import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";
import { MissingParamError } from "@/presentation/errors/missing-param-error";
import { badRequest } from "@/presentation/helper/http-helper";
import { Controller } from "@/presentation/protocols/controller";
import { EmailValidator } from "@/presentation/protocols/emailValidator";
import { InvalidParamError } from "@/presentation/errors/invalid-param-error";
import { ServerError } from "@/presentation/errors/server-error";

export class SignUpController implements Controller {
  private readonly emailValitador: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValitador = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
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
    } catch (error) {
      return {
        statusCode: 500,
        body: new ServerError(),
      };
    }
  }
}
