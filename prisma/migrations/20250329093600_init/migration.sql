-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ARTICLE', 'SIMPLE_POST');

-- CreateEnum
CREATE TYPE "CommadStatus" AS ENUM ('EN_ATTEND_CONFIRMATION', 'LIVRAISON_EN_COURS');

-- CreateEnum
CREATE TYPE "DeliveryStatus" AS ENUM ('BEFORE_EXPEDIE', 'VERIFICATION', 'EXPEDIE', 'EN_COURS', 'RETOUR', 'LIVRE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SELLER', 'BUYER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "pays" VARCHAR(255) NOT NULL,
    "adress" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'SELLER',
    "code_postal" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "pays" VARCHAR(255) NOT NULL,
    "adress" VARCHAR(255) NOT NULL,
    "code_postal" TEXT,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "id_admin" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "sender_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sender_id" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'ARTICLE',
    "description" TEXT NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "stock" DOUBLE PRECISION NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image_url" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Command" (
    "id" SERIAL NOT NULL,
    "id_article" INTEGER NOT NULL,
    "id_client" INTEGER NOT NULL,
    "date_command" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "CommadStatus" NOT NULL,

    CONSTRAINT "Command_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeletedPost" (
    "id" SERIAL NOT NULL,
    "id_admin" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,
    "delete_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT NOT NULL,

    CONSTRAINT "DeletedPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" SERIAL NOT NULL,
    "id_commnad" INTEGER NOT NULL,
    "delivery_date" TIMESTAMP(3) NOT NULL,
    "status" "DeliveryStatus" NOT NULL,
    "starting_adresse" TEXT NOT NULL,
    "arrival_adresse" TEXT NOT NULL,
    "time_limit" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_tel_key" ON "User"("tel");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_tel_key" ON "Admin"("tel");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Command" ADD CONSTRAINT "Command_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Command" ADD CONSTRAINT "Command_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeletedPost" ADD CONSTRAINT "DeletedPost_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeletedPost" ADD CONSTRAINT "DeletedPost_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_id_commnad_fkey" FOREIGN KEY ("id_commnad") REFERENCES "Command"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
