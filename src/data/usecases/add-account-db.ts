import { AddAccount, AddAccountModel } from "@/domain/usecases/add-account";
import { Encrypter } from "@/data/protocols/encrypter";

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
