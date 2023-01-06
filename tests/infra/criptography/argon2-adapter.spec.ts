import argon2 from "argon2";
import { Argon2Adapter } from "@/infra/criptography/argon2-adapter";

jest.mock("argon2", () => ({
  async hash(): Promise<string> {
    return new Promise((resolve) => {
      resolve("any_hash");
    });
  },
}));

const makeSut = (): Argon2Adapter => {
  return new Argon2Adapter();
};

describe("Argon2 Adapter", () => {
  test("Should call Argon2 with correct value", async () => {
    const sut = makeSut();

    const hashSpy = jest.spyOn(argon2, "hash");

    await sut.encrypt("any_value");

    expect(hashSpy).toHaveBeenCalledWith("any_value");
  });

  test("Should return a hash on success", async () => {
    const sut = makeSut();

    const hash = await sut.encrypt("any_value");

    expect(hash).toBe("any_hash");
  });

  test("Should throw if argon2 throws", async () => {
    const sut = makeSut();

    jest.spyOn(argon2, "hash").mockReturnValueOnce(
      new Promise((resolve, reject) => {
        reject(new Error());
      }),
    );

    const hash = sut.encrypt("any_value");

    await expect(hash).rejects.toThrow();
  });
});
