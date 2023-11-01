/*
  Warnings:

  - You are about to drop the column `area` on the `Shop` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Shop` table. All the data in the column will be lost.
  - You are about to drop the column `district` on the `Shop` table. All the data in the column will be lost.
  - You are about to drop the column `division` on the `Shop` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Shop" DROP COLUMN "area",
DROP COLUMN "country",
DROP COLUMN "district",
DROP COLUMN "division",
ADD COLUMN     "shopArea" TEXT,
ADD COLUMN     "shopCountry" TEXT,
ADD COLUMN     "shopDistrict" TEXT,
ADD COLUMN     "shopDivision" TEXT;
