CREATE TABLE `workplace-schema`.`bookings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `resId` INT NOT NULL,
  `date` DATE NOT NULL,
  `bookedBy` VARCHAR(100) NOT NULL,
  `bookedFor` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));
