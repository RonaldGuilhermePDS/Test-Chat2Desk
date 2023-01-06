import { AccountPostgresRepository } from "@/infra/db/postgres/account-repository/account";

import { PostgresHelper } from "@/infra/db/postgres/helper/postgres-helper";

describe("AccountPostgresRepository", () => {
  beforeAll(async () => {
    await PostgresHelper.connect();
  });

  afterAll(async () => {
    await PostgresHelper.disconnect();
  });

  beforeEach(async () => {
    const AccountTables = await PostgresHelper.getConnection();

    await AccountTables.accounts.deleteMany({});
  });

  test("Should return an account on success", async () => {
    const sut = new AccountPostgresRepository();

    const account = await sut.add({
      name: "any_name",
      email: "any_email@mail.com",
      password: "any_password",
    });

    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account.name).toBe("any_name");
    expect(account.email).toBe("any_email@mail.com");
    expect(account.password).toBe("any_password");
  });
});
