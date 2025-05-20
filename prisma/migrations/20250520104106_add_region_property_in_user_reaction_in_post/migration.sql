-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "reaction" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "region" VARCHAR(255) NOT NULL DEFAULT 'unknow';
