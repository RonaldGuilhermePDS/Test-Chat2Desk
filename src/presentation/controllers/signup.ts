import {
  HttpRequest,
  HttpResponse,
  EmailValidator,
  Controller,
} from "@/presentation/protocols";
import { MissingParamError, InvalidParamError } from "@/presentation/errors";
import { badRequest, serverError } from "@/presentation/helper/http-helper";

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

      if (httpRequest.body.password !== httpRequest.body.passwordConfirmation) {
        return badRequest(new InvalidParamError("passwordConfirmation"));
      }

      const isValid = this.emailValitador.isValid(httpRequest.body.email);

      if (!isValid) {
        return badRequest(new InvalidParamError("email"));
      }

      return { statusCode: 200, body: httpRequest.body };
    } catch (error) {
      return serverError();
    }
  }
}
