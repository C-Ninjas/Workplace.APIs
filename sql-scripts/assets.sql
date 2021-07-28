CREATE TABLE `workplace-schema`.`assets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `building` VARCHAR(200) NOT NULL,
  `floor` VARCHAR(3) NOT NULL,
  `bay` VARCHAR(100) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `isbookable` BIT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`));


INSERT INTO `workplace-schema`.`assets` (
  `building`, `floor`, `bay`, `name`, `type`, `isbookable`
) 
VALUES (
  'Prestige Dynasty', '2', 'Purple', 'BLR-Prestige-2F-D1', 'Desk', b'1'
);