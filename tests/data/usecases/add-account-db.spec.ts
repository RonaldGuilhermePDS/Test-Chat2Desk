import { AddAccountDB } from "@/data/usecases/add-account-db";
import { Encrypter } from "@/data/usecases/add-account-db-protocols";

interface SutTypes {
  sut: AddAccountDB;
  encrypterStub: Encrypter;
}

const makeSut = (): SutTypes => {
  const encrypterStub = makeEncrypter();

  const sut = new AddAccountDB(encrypterStub);

  return {
    sut,
    encrypterStub,
  };
};

const makeEncrypter = (): Encrypter => {
  class EncrypterStub implements Encrypter {
    async encrypt(value: string): Promise<string> {
      return new Promise((resolve) => {
        resolve("hashed_password");
      });
    }
  }

  return new EncrypterStub();
};

describe("AddAccountDB", () => {
  test("Should call Encrypter with correct password", async () => {
    const { sut, encrypterStub } = makeSut();

    const encryptSpy = jest.spyOn(encrypterStub, "encrypt");

    const accountData = {
      name: "valid_name",
      email: "valid_email@mail.com",
      password: "valid_password",
    };

    await sut.add(accountData);
    expect(encryptSpy).toHaveBeenCalledWith("valid_password");
  });

  test("Should throw if Encrypter throws", async () => {
    const { sut, encrypterStub } = makeSut();

    jest.spyOn(encrypterStub, "encrypt").mockReturnValueOnce(
      new Promise((resolve, reject) => {
        reject(new Error());
      }),
    );

    const accountData = {
      name: "valid_name",
      email: "valid_email@mail.com",
      password: "valid_password",
    };

    const account = sut.add(accountData);
    await expect(account).rejects.toThrow();
  });
});
