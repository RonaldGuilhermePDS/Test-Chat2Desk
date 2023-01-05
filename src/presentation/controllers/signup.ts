import {
  HttpRequest,
  HttpResponse,
  EmailValidator,
  Controller,
} from "@/presentation/protocols";
import { MissingParamError, InvalidParamError } from "@/presentation/errors";
import { badRequest, serverError } from "@/presentation/helper/http-helper";
import { AddAccount } from "@/domain/usecases/add-account";

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;
  private readonly addAccount: AddAccount;

  constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator;
    this.addAccount = addAccount;
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

      const { name, email, password, passwordConfirmation } = httpRequest.body;

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError("passwordConfirmation"));
      }

      const isValid = this.emailValidator.isValid(email);

      if (!isValid) {
        return badRequest(new InvalidParamError("email"));
      }

      const account = this.addAccount.add({
        name,
        email,
        password,
      });

      return { statusCode: 200, body: account };
    } catch (error) {
      return serverError();
    }
  }
}
