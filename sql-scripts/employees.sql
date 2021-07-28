CREATE TABLE `workplace-schema`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(200) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `isManager` BIT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`));


INSERT INTO `workplace-schema`.`employees`
(
`email`,
`name`,
`isManager`
)
VALUES
(
'abhishek@somename.onmicrosoft.com',
'Abhishek Gupta',
1
);
