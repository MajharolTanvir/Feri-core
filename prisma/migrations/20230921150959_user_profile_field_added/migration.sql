/*
  Warnings:

  - Added the required column `presentAddress` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImage` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `syncId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "presentAddress" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "syncId" TEXT NOT NULL;
