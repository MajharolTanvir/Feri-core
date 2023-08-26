/*
  Warnings:

  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagsConnection" (
    "id" TEXT NOT NULL,
    "tagsId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "TagsConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "colorCode" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColorConnection" (
    "id" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ColorConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" TEXT NOT NULL,
    "sizeNumber" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SizeConnection" (
    "id" TEXT NOT NULL,
    "sizeId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "SizeConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FreeDelivery" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "charge" TEXT NOT NULL DEFAULT 'FREE',
    "shippingData" TEXT NOT NULL,

    CONSTRAINT "FreeDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaidDelivery" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "charge" TEXT NOT NULL,
    "shippingData" TEXT NOT NULL,
    "tax" TEXT NOT NULL,

    CONSTRAINT "PaidDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "reviewData" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,
    "inStoke" TEXT NOT NULL,
    "freeDeliveryId" TEXT NOT NULL,
    "paidDeliveryId" TEXT NOT NULL,
    "display" TEXT NOT NULL,
    "mainPrice" INTEGER NOT NULL,
    "discountPrice" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsConnection" ADD CONSTRAINT "TagsConnection_tagsId_fkey" FOREIGN KEY ("tagsId") REFERENCES "Tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorConnection" ADD CONSTRAINT "ColorConnection_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorConnection" ADD CONSTRAINT "ColorConnection_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SizeConnection" ADD CONSTRAINT "SizeConnection_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SizeConnection" ADD CONSTRAINT "SizeConnection_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_freeDeliveryId_fkey" FOREIGN KEY ("freeDeliveryId") REFERENCES "FreeDelivery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_paidDeliveryId_fkey" FOREIGN KEY ("paidDeliveryId") REFERENCES "PaidDelivery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
