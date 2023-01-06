import {
  AddAccount,
  AddAccountModel,
  Encrypter,
} from "./add-account-db-protocols";

export class AddAccountDB implements AddAccount {
  private readonly encrypter: Encrypter;

  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter;
  }

  async add(account: AddAccountModel): Promise<any> {
    await this.encrypter.encrypt(account.password);

    return new Promise((resolve) => {
      resolve("");
    });
  }
}
