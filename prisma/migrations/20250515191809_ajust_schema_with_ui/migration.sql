/*
  Warnings:

  - You are about to drop the column `sender_date` on the `Message` table. All the data in the column will be lost.
  - Added the required column `product_preference` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "sender_date",
ADD COLUMN     "sending_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "product_preference" VARCHAR(255) NOT NULL,
ALTER COLUMN "adress" DROP NOT NULL;
