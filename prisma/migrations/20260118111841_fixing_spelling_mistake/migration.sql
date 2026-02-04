/*
  Warnings:

  - You are about to drop the column `cheched` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "cheched",
ADD COLUMN     "checked" BOOLEAN NOT NULL DEFAULT false;
