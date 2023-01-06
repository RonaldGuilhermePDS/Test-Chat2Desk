import { PrismaClient } from "@prisma/client";

type PrismaClientConnected = PrismaClient & {
  prototype: any;
  $disconnect: () => Promise<void>;
};

export const PostgresHelper = {
  client: {} as PrismaClientConnected | any,

  async getConnection(): Promise<PrismaClientConnected> {
    return this.client;
  },

  async connect(): Promise<void> {
    this.client = new PrismaClient();

    await this.client.$connect();
  },

  async disconnect(): Promise<void> {
    await this.client.$disconnect();
  },
};
