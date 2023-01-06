import { PostgresHelper as sut } from "@/infra/db/postgres/helper/postgres-helper";

describe("Postgres Helper", () => {
  beforeAll(async () => {
    await sut.connect();
  });

  afterAll(async () => {
    await sut.disconnect();
  });

  test("Should reconnect if postgres is down", async () => {
    let accountTable = await sut.getConnection();

    expect(accountTable.accounts).toBeTruthy();

    await sut.disconnect();

    accountTable = await sut.getConnection();

    expect(accountTable.accounts).toBeTruthy();
  });
});
