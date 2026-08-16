import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export type DbClient = Prisma.TransactionClient | typeof prisma;

export type ActionState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};
