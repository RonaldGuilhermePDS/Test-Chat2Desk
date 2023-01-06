import { AddAccountRepository } from "@/data/protocols/add-account-repository";
import { AddAccountModel } from "@/domain/usecases/add-account";
import { PostgresHelper } from "@/infra/db/postgres/helper/postgres-helper";

export class AccountPostgresRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<any> {
    const accountTable = await PostgresHelper.getConnection();

    const result = await accountTable?.accounts.create({
      data: accountData,
    });

    return result;
  }
}
