/*
  Warnings:

  - You are about to drop the column `couponDiscountPercentage` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `couponDiscountTitle` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `couponPromoCode` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `globalDiscountPercentage` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "couponDiscountPercentage",
DROP COLUMN "couponDiscountTitle",
DROP COLUMN "couponPromoCode",
DROP COLUMN "globalDiscountPercentage";

-- CreateTable
CREATE TABLE "LocalDiscount" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Percentage" INTEGER NOT NULL,
    "PromoCode" TEXT NOT NULL,

    CONSTRAINT "LocalDiscount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromoCodeWithProduct" (
    "localDiscountId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "PromoCodeWithProduct_pkey" PRIMARY KEY ("localDiscountId")
);

-- AddForeignKey
ALTER TABLE "PromoCodeWithProduct" ADD CONSTRAINT "PromoCodeWithProduct_localDiscountId_fkey" FOREIGN KEY ("localDiscountId") REFERENCES "LocalDiscount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromoCodeWithProduct" ADD CONSTRAINT "PromoCodeWithProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
