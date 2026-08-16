/*
  Warnings:

  - The primary key for the `drivers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `drivers` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `Int`.
  - The primary key for the `report_repairs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `license_plate_id` on the `report_repairs` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `report_repairs` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `Int`.
  - The primary key for the `tire_change_history` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `tire_change_history` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `truck_id` on the `tire_change_history` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `Int`.
  - The primary key for the `tire_item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `tire_item` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `tire_change_id` on the `tire_item` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to drop the `license_plates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `maintenancelog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `migrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `password_reset_tokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `personal_access_tokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `created_at` on table `drivers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `drivers` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `truck_id` to the `report_repairs` table without a default value. This is not possible if the table is not empty.
  - Made the column `created_at` on table `report_repairs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `report_repairs` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `license_plates` DROP FOREIGN KEY `FK_license_plates_drivers`;

-- DropForeignKey
ALTER TABLE `maintenancelog` DROP FOREIGN KEY `MaintenanceLog_truck_id_fkey`;

-- DropForeignKey
ALTER TABLE `report_repairs` DROP FOREIGN KEY `report_repairs_license_plate_id_fkey`;

-- DropForeignKey
ALTER TABLE `tire_change_history` DROP FOREIGN KEY `tire_change_history_truck_id_fkey`;

-- DropForeignKey
ALTER TABLE `tire_item` DROP FOREIGN KEY `tire_item_tire_change_id_fkey`;

-- DropIndex
DROP INDEX `report_repairs_license_plate_id_fkey` ON `report_repairs`;

-- AlterTable
ALTER TABLE `drivers` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `report_repairs` DROP PRIMARY KEY,
    DROP COLUMN `license_plate_id`,
    ADD COLUMN `mileage` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `truck_id` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tire_change_history` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `truck_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tire_item` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `tire_change_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `license_plates`;

-- DropTable
DROP TABLE `maintenancelog`;

-- DropTable
DROP TABLE `migrations`;

-- DropTable
DROP TABLE `password_reset_tokens`;

-- DropTable
DROP TABLE `personal_access_tokens`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `trucks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `license_plate` VARCHAR(255) NOT NULL,
    `current_mileage` INTEGER NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,
    `driver_id` INTEGER NULL,

    UNIQUE INDEX `trucks_license_plate_key`(`license_plate`),
    UNIQUE INDEX `trucks_driver_id_key`(`driver_id`),
    INDEX `trucks_driver_id_idx`(`driver_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `truck_maintenance_statuses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `truck_id` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `service_mileage` INTEGER NOT NULL DEFAULT 0,
    `next_service_at` INTEGER NOT NULL DEFAULT 0,
    `service_date` DATETIME(3) NOT NULL,

    UNIQUE INDEX `truck_maintenance_statuses_truck_id_type_key`(`truck_id`, `type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `emailVerified` BOOLEAN NOT NULL DEFAULT false,
    `image` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `id` VARCHAR(191) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `ipAddress` TEXT NULL,
    `userAgent` TEXT NULL,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `session_userId_idx`(`userId`(191)),
    UNIQUE INDEX `session_token_key`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account` (
    `id` VARCHAR(191) NOT NULL,
    `accountId` TEXT NOT NULL,
    `providerId` TEXT NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `accessToken` TEXT NULL,
    `refreshToken` TEXT NULL,
    `idToken` TEXT NULL,
    `accessTokenExpiresAt` DATETIME(3) NULL,
    `refreshTokenExpiresAt` DATETIME(3) NULL,
    `scope` TEXT NULL,
    `password` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `account_userId_idx`(`userId`(191)),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification` (
    `id` VARCHAR(191) NOT NULL,
    `identifier` TEXT NOT NULL,
    `value` TEXT NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `verification_identifier_idx`(`identifier`(191)),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `report_repairs_truck_id_idx` ON `report_repairs`(`truck_id`);

-- AddForeignKey
ALTER TABLE `trucks` ADD CONSTRAINT `trucks_driver_id_fkey` FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `report_repairs` ADD CONSTRAINT `report_repairs_truck_id_fkey` FOREIGN KEY (`truck_id`) REFERENCES `trucks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tire_change_history` ADD CONSTRAINT `tire_change_history_truck_id_fkey` FOREIGN KEY (`truck_id`) REFERENCES `trucks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tire_item` ADD CONSTRAINT `tire_item_tire_change_id_fkey` FOREIGN KEY (`tire_change_id`) REFERENCES `tire_change_history`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `truck_maintenance_statuses` ADD CONSTRAINT `truck_maintenance_statuses_truck_id_fkey` FOREIGN KEY (`truck_id`) REFERENCES `trucks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `account` ADD CONSTRAINT `account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RedefineIndex
CREATE INDEX `tire_item_brand_id_idx` ON `tire_item`(`brand_id`);
DROP INDEX `tire_item_brand_id_fkey` ON `tire_item`;
