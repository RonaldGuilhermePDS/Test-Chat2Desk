import {
  AddAccount,
  AddAccountModel,
  AddAccountRepository,
  Encrypter,
} from "./add-account-db-protocols";

export class AddAccountDB implements AddAccount {
  private readonly encrypter: Encrypter;
  private readonly addAccountRepository: AddAccountRepository;

  constructor(
    encrypter: Encrypter,
    addAccountRepository: AddAccountRepository,
  ) {
    this.encrypter = encrypter;
    this.addAccountRepository = addAccountRepository;
  }

  async add(accountData: AddAccountModel): Promise<any> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password);
    await this.addAccountRepository.add(
      Object.assign({}, accountData, { password: hashedPassword }),
    );

    return new Promise((resolve) => {
      resolve("");
    });
  }
}
