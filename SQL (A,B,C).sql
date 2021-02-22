CREATE TABLE `employees` (
	`id` int(255) NOT NULL,
	`name` varchar(100) NOT NULL,
	`date_hired` datetime(6) NOT NULL,
	`department_id` int(255) NOT NULL,
	`salary_id` int(255) NOT NULL
);

CREATE TABLE `departments` (
	`id` int(255) NOT NULL,
	`department` varchar(100) NOT NULL
);

CREATE TABLE `salary` (
	`id` int(255) NOT NULL,
	`salary` int(255) NOT NULL
);

INSERT INTO `employees` (`id`, `name`, `date_hired`, `department_id`, `salary_id`) VALUES
(1, 'Employee1', '2017-10-07 00:00:00', 3, 1),
(2, 'Employee2', '2012-10-08 00:00:00', 2, 3),
(3, 'Employee3', '2016-08-10 00:00:00', 1, 2),
(4, 'Employee4', '2018-08-10 00:00:00', 3, 2);


INSERT INTO `departments` (`id`, `department`) VALUES
(1, 'Marketing'),
(2, 'Consultancy'),
(3, 'IT');

INSERT INTO `salary` (`id`, `salary`) VALUES
(1, 10000),
(2, 15000),
(3, 20000);

/*
	A. Get all data of highest paid employee (without using LIMIT)
*/
SELECT * FROM `employees` WHERE `salary_id` = 3;

/*
	B. Get all employees that are hired from 2017-2018
*/

SELECT * FROM `employees` WHERE `date_hired` BETWEEN '2017-01-01 00:00:00' AND '2018-12-31 00:00:00';

/*
	C. Get all employees that belongs to IT Department AND hired 2018 onwards
*/
SELECT * FROM `employees WHERE `department_id` = 3 AND `date_hired` >= '2018-01-01 00:00:00';

ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD CONSTRAINT `FK_DeptID` FOREIGN KEY (`department_id``) REFERENCES `departments` (`id`);
  
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);
  
ALTER TABLE `salary`
  ADD PRIMARY KEY (`id`);