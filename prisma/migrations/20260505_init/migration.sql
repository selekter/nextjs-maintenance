-- CreateTable
CREATE TABLE `license_plates` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `number_plate` VARCHAR(255) NOT NULL,
    `current_mileage` INTEGER NOT NULL DEFAULT 0,
    `driver_id` BIGINT UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `license_plates_number_plate_key`(`number_plate`),
    UNIQUE INDEX `license_plates_driver_id_key`(`driver_id`),
    INDEX `FK_license_plates_drivers`(`driver_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drivers` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `drivers_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report_repairs` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `license_plate_id` BIGINT UNSIGNED NOT NULL,
    `repair` VARCHAR(255) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `description` TEXT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `report_repairs_status_updated_at_idx`(`status`, `updated_at` DESC),
    INDEX `report_repairs_license_plate_id_fkey`(`license_plate_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `migrations` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `migration` VARCHAR(255) NOT NULL,
    `batch` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `password_reset_tokens` (
    `email` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personal_access_tokens` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `tokenable_type` VARCHAR(255) NOT NULL,
    `tokenable_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `token` VARCHAR(64) NOT NULL,
    `abilities` TEXT NULL,
    `last_used_at` TIMESTAMP(0) NULL,
    `expires_at` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `personal_access_tokens_token_unique`(`token`),
    INDEX `personal_access_tokens_tokenable_type_tokenable_id_index`(`tokenable_type`, `tokenable_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `email_verified_at` TIMESTAMP(0) NULL,
    `password` VARCHAR(255) NOT NULL,
    `remember_token` VARCHAR(100) NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `users_email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tire_change_history` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `truck_id` BIGINT UNSIGNED NOT NULL,
    `change_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `mileage_at_change` INTEGER NOT NULL,
    `notes` TEXT NULL,

    INDEX `tire_change_history_truck_id_idx`(`truck_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tire_brand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tire_brand_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tire_item` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `tire_change_id` BIGINT NOT NULL,
    `brand_id` INTEGER NOT NULL,
    `tire_code` VARCHAR(191) NOT NULL,
    `position` INTEGER NOT NULL,

    INDEX `tire_item_tire_change_id_idx`(`tire_change_id`),
    INDEX `tire_item_brand_id_fkey`(`brand_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `maintenancelog` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `truck_id` BIGINT UNSIGNED NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `service_mileage` INTEGER NOT NULL,
    `next_service_at` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `MaintenanceLog_truck_id_created_at_idx`(`truck_id`, `created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `license_plates` ADD CONSTRAINT `FK_license_plates_drivers` FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `report_repairs` ADD CONSTRAINT `report_repairs_license_plate_id_fkey` FOREIGN KEY (`license_plate_id`) REFERENCES `license_plates`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tire_change_history` ADD CONSTRAINT `tire_change_history_truck_id_fkey` FOREIGN KEY (`truck_id`) REFERENCES `license_plates`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tire_item` ADD CONSTRAINT `tire_item_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `tire_brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tire_item` ADD CONSTRAINT `tire_item_tire_change_id_fkey` FOREIGN KEY (`tire_change_id`) REFERENCES `tire_change_history`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintenancelog` ADD CONSTRAINT `MaintenanceLog_truck_id_fkey` FOREIGN KEY (`truck_id`) REFERENCES `license_plates`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

