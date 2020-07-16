-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`SendLogsBodyData`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`SendLogsBodyData` ;

CREATE TABLE IF NOT EXISTS `mydb`.`SendLogsBodyData` (
  `idx` INT(3) NOT NULL,
  `Content-Encoding` VARCHAR(45) NULL,
  `ddsourse` VARCHAR(500) NULL,
  `ddtags` VARCHAR(500) NULL,
  `hostname` VARCHAR(45) NULL,
  `message` VARCHAR(1000) NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`GetLogsBodyData`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`GetLogsBodyData` ;

CREATE TABLE IF NOT EXISTS `mydb`.`GetLogsBodyData` (
  `idx` INT NOT NULL,
  `index` VARCHAR(100) NULL,
  `limit` INT(32) NULL,
  `query` VARCHAR(45) NOT NULL,
  `sort` ENUM('asc', 'desc') NULL,
  `startAt` VARCHAR(45) NULL,
  `time` VARCHAR(45) NULL,
  `logs` VARCHAR(400) NULL,
  `nextLogID` VARCHAR(100) NULL,
  `status` VARCHAR(100) NULL,
  PRIMARY KEY (`idx`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
