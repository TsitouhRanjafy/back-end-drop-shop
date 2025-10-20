import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type IPrismaClient = typeof prisma;

export default prisma;