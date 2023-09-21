/*
  Warnings:

  - You are about to drop the column `freeDeliveryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `paidDeliveryId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `productId` to the `FreeDelivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `PaidDelivery` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_freeDeliveryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_paidDeliveryId_fkey";

-- AlterTable
ALTER TABLE "FreeDelivery" ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PaidDelivery" ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "freeDeliveryId",
DROP COLUMN "paidDeliveryId";

-- AddForeignKey
ALTER TABLE "FreeDelivery" ADD CONSTRAINT "FreeDelivery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaidDelivery" ADD CONSTRAINT "PaidDelivery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
