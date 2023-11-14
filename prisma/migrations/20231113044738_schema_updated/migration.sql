/*
  Warnings:

  - The primary key for the `Profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `syncId` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the `Shop` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nidNumber]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[treadLicenseNo]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_syncId_fkey";

-- DropForeignKey
ALTER TABLE "Shop" DROP CONSTRAINT "Shop_syncId_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_pkey",
DROP COLUMN "id",
DROP COLUMN "syncId",
ADD COLUMN     "nidNumber" TEXT,
ADD COLUMN     "shopArea" TEXT,
ADD COLUMN     "shopContactNo" TEXT,
ADD COLUMN     "shopCountry" TEXT,
ADD COLUMN     "shopDistrict" TEXT,
ADD COLUMN     "shopDivision" TEXT,
ADD COLUMN     "shopName" TEXT,
ADD COLUMN     "treadLicenseNo" TEXT,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("userId");

-- DropTable
DROP TABLE "Shop";

-- CreateIndex
CREATE UNIQUE INDEX "Profile_nidNumber_key" ON "Profile"("nidNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_treadLicenseNo_key" ON "Profile"("treadLicenseNo");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
