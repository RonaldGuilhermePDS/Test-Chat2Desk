import { SignUpController } from "@/presentation/controllers/signup/signup";
import { EmailValidatorAdapter } from "@/infra/validators/email-validator-adapter";
import { AddAccountDB } from "@/data/usecases/add-account-db";
import { Argon2Adapter } from "@/infra/criptography/argon2-adapter";
import { AccountPostgresRepository } from "@/infra/db/postgres/account-repository/account";

export const makeSignUpController = (): SignUpController => {
  const emailValidatorAdapter = new EmailValidatorAdapter();
  const argon2Adapter = new Argon2Adapter();
  const accountPostgresRepository = new AccountPostgresRepository();
  const addAccountDB = new AddAccountDB(
    argon2Adapter,
    accountPostgresRepository,
  );

  return new SignUpController(emailValidatorAdapter, addAccountDB);
};
