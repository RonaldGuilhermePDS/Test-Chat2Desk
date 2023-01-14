import { SignUpController } from "@/presentation/controllers/signup/signup";
import { EmailValidatorAdapter } from "@/infra/validators/email-validator-adapter";
import { AddAccountDB } from "@/data/usecases/add-account-db";
import { Argon2Adapter } from "@/infra/criptography/argon2-adapter";
import { AccountPostgresRepository } from "@/infra/db/postgres/account-repository/account";
import { Controller } from "@/presentation/protocols/controller";
import { LogControllerDecorator } from "@/main/decorators/log";

export const makeSignUpController = (): Controller => {
  const emailValidatorAdapter = new EmailValidatorAdapter();
  const argon2Adapter = new Argon2Adapter();
  const accountPostgresRepository = new AccountPostgresRepository();
  const addAccountDB = new AddAccountDB(
    argon2Adapter,
    accountPostgresRepository,
  );
  const signUpController = new SignUpController(
    emailValidatorAdapter,
    addAccountDB,
  );

  return new LogControllerDecorator(signUpController);
};
