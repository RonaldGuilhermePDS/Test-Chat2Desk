import argon2 from "argon2";
import { Argon2Adapter } from "@/infra/criptography/argon2-adapter";

describe("Argon2 Adapter", () => {
  test("Should call Argon2 with correct value", async () => {
    const sut = new Argon2Adapter();

    const hashSpy = jest.spyOn(argon2, "hash");

    await sut.encrypt("any_value");

    expect(hashSpy).toHaveBeenCalledWith("any_value");
  });
});
