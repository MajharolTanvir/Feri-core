/*
  Warnings:

  - You are about to drop the column `treadLicenceNo` on the `Shop` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[treadLicenseNo]` on the table `Shop` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Shop_treadLicenceNo_key";

-- AlterTable
ALTER TABLE "Shop" DROP COLUMN "treadLicenceNo",
ADD COLUMN     "treadLicenseNo" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Shop_treadLicenseNo_key" ON "Shop"("treadLicenseNo");
