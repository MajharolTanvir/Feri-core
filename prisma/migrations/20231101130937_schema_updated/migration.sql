/*
  Warnings:

  - You are about to drop the column `Percentage` on the `LocalDiscount` table. All the data in the column will be lost.
  - You are about to drop the column `PromoCode` on the `LocalDiscount` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `LocalDiscount` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `LocalDiscount` table. All the data in the column will be lost.
  - Added the required column `percentage` to the `LocalDiscount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promoCode` to the `LocalDiscount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerId` to the `LocalDiscount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `LocalDiscount` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LocalDiscount" DROP CONSTRAINT "LocalDiscount_userId_fkey";

-- AlterTable
ALTER TABLE "LocalDiscount" DROP COLUMN "Percentage",
DROP COLUMN "PromoCode",
DROP COLUMN "Title",
DROP COLUMN "userId",
ADD COLUMN     "percentage" INTEGER NOT NULL,
ADD COLUMN     "promoCode" TEXT NOT NULL,
ADD COLUMN     "sellerId" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "LocalDiscount" ADD CONSTRAINT "LocalDiscount_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
