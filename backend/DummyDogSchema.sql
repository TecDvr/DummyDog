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
  `idx` INT(3) NOT NULL AUTO_INCREMENT,
  `ddsource` VARCHAR(500) NULL,
  `ddtags` VARCHAR(500) NULL,
  `hostname` VARCHAR(45) NULL,
  `message` VARCHAR(1000) NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`LogsTemplateData`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `mydb`.`LogsTemplateData` (
  `idx` INT(3) NOT NULL AUTO_INCREMENT,
  `ddsource` VARCHAR(500) NULL,
  `ddtags` VARCHAR(500) NULL,
  `hostname` VARCHAR(45) NULL,
  `message` VARCHAR(1000) NULL,
  PRIMARY KEY (`idx`))
ENGINE = InnoDB;

INSERT INTO LogsTemplateData(ddsource, ddtags, hostname, message)
VALUES
  ("csharp", "env:staging, application:console", "i-012345678", "2017-03-10 15:13:53.130 ERROR [10] ConsoleApplication1.Program mymethod:32 - an error occured while processing"),
  ("docker", "app:dummydog", "localhost", '172.17.0.1 - - [06/Jan/2017:16:16:37 +0000] "GET /datadoghq/company?test=var1%20Pl HTTP/1.1" 200 612 "http://www.perdu.com/" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" "-"'),
  ("iis", "service:demo,item:third", "i-928734421", "2002-05-02 17:42:15 172.22.255.255 GET /images/picture.jpg ?toto=tata 80 toto 123.123.123.123 Mozilla/4.0+(compatible;MSIE+5.5;+Windows+2000+Server) 200 211 322 1234"),
  ("java", "cluster:javapp,env:prod,version:1.8", "cluster01-name", "2000-09-07 14:07:41,508 [main] INFO  MyApp - Entering application."),
  ("nginx", "", "server-12345", '2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World'),
  ("nodejs", "service:payment,env:staging", "i-182730465", "Starting the staging server..."),
  ("php", "", "worker187-php", 'Error message. [dd.span_id="4014120331748607290" dd.trace_id="2762343115747197096"]'),
  ("python", "lang:python, service:tester, version:1", "host01-cluster2b-py", "2017-12-19T14:37:58,995 INFO  [process.name] [20081] this is my python log"),
  ("redis", "", "server.redis.01", "12115:M 08 Jan 17:45:41.572 # Server started, Redis version 3.0.6"),
  ("ruby", "service:api", "i-274583170",'I, [1999-03-03T02:34:24.895701 #19074]  INFO -- : Started GET "/api/v1/example/query" for 123.123.123.123 at 1999-03-03 02:34:24+0000'),
  ("tomcat", "service:app", "vm-001-app", "2000-09-07 14:07:44 INFO org.foo.bar:32 - Entering application."),
  ("zookeeper", "", "i-432156780", "2000-09-07 14:07:41,508 [main] INFO  MyApp - Entering application."),
  ("", "", "", "");

-- -----------------------------------------------------
-- Table `mydb`.`GetLogsBodyData`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`GetLogsBodyData` ;

CREATE TABLE IF NOT EXISTS `mydb`.`GetLogsBodyData` (
  `idx` INT NOT NULL AUTO_INCREMENT,
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
