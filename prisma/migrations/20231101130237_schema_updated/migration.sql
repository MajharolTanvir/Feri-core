/*
  Warnings:

  - Added the required column `userId` to the `LocalDiscount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LocalDiscount" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "LocalDiscount" ADD CONSTRAINT "LocalDiscount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
