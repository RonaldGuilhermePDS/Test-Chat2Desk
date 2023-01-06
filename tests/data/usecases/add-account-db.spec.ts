import { AddAccountDB } from "@/data/usecases/add-account-db";
import { Encrypter } from "../protocols/encrypter";

interface SutTypes {
  sut: AddAccountDB;
  encrypterStub: Encrypter;
}

const makeSut = (): SutTypes => {
  class EncrypterStub {
    async encrypt(value: string): Promise<string> {
      return new Promise((resolve) => {
        resolve("hashed_password");
      });
    }
  }

  const encrypterStub = new EncrypterStub();

  const sut = new AddAccountDB(encrypterStub);

  return {
    sut,
    encrypterStub,
  };
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
});
