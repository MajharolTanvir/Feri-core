/*
  Warnings:

  - The `display` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `subCategoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('SHOW', 'HIDDEN');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "subCategoryId" TEXT NOT NULL,
DROP COLUMN "display",
ADD COLUMN     "display" "ProductStatus" NOT NULL DEFAULT 'HIDDEN';

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
