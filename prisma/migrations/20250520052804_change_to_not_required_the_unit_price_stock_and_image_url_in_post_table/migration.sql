/*
  Warnings:

  - The `type` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TypePost" AS ENUM ('ARTICLE', 'SIMPLE_POST');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "type",
ADD COLUMN     "type" "TypePost" NOT NULL DEFAULT 'ARTICLE',
ALTER COLUMN "unit_price" DROP NOT NULL,
ALTER COLUMN "stock" DROP NOT NULL,
ALTER COLUMN "image_url" DROP NOT NULL;

-- DropEnum
DROP TYPE "Type";
