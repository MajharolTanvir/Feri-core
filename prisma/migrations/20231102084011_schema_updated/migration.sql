/*
  Warnings:

  - You are about to drop the column `confirmedCode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "confirmedCode",
DROP COLUMN "token",
ALTER COLUMN "validation" DROP DEFAULT;
