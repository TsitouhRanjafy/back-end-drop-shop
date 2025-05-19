-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profile_url" TEXT,
ALTER COLUMN "product_preference" DROP NOT NULL;
