/*
  Warnings:

  - You are about to drop the column `inStoke` on the `Product` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ProductStoke" AS ENUM ('InStoke', 'OutOfStoke');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "inStoke",
ADD COLUMN     "stoke" "ProductStoke" NOT NULL DEFAULT 'InStoke';
