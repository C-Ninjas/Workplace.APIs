CREATE TABLE `workplace-schema`.`bookings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `resId` INT NOT NULL,
  `date` DATE NOT NULL,
  `bookedBy` VARCHAR(45) NOT NULL,
  `bookedFor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
