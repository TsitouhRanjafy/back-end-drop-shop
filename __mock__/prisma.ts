import { beforeEach } from "vitest";
import { mockDeep, mockReset } from  'vitest-mock-extended';
import { IPrismaClient } from "../src/infrastructure/repository/prismaClient";

beforeEach(() => {
  mockReset(prisma)
})

const prisma = mockDeep<IPrismaClient>();

export default prisma;