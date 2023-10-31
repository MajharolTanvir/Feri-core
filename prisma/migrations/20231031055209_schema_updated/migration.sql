/*
  Warnings:

  - Added the required column `confirmedCode` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "confirmedCode" INTEGER NOT NULL,
ADD COLUMN     "validation" BOOLEAN NOT NULL DEFAULT false;
