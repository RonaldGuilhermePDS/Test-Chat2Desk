import argon2 from "argon2";
import { Encrypter } from "@/data/protocols/encrypter";

export class Argon2Adapter implements Encrypter {
  async encrypt(value: string): Promise<string> {
    const hash = await argon2.hash(value);

    return hash;
  }
}
