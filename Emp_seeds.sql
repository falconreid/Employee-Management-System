
USE employeeDB;

INSERT INTO department
  (dept_name)
VALUES
  ("Executive"),
  ("Engineering"),
  ("Legal"),
  ("Sales"),
  ("Marketing");

INSERT INTO roles
  (title, salary, department_id)
VALUES
  ("Chief Executive Officer", 250000, 1),
  ("Chief Information Officer", 200000, 1),
  ("Lead Engineer", 120000, 2),
  ("Associate Engineer", 65000, 2),
  ("Lead Legal Counsel", 120000, 3),
  ("Associate Legal Counsel", 65000, 3),
  ("Lead Sales", 120000, 4),
  ("Associate Sales", 65000, 4),
  ("Lead Marketing", 120000, 5);


INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ("Jon", "Wisenheimer", 1, NULL),
  ("Beau", "Borland", 2, 1 ),
  ("Johnny", "Jingleheimer", 3, 2),
  ("Jenny", "Johnsonville", 4, 3),
  ("Sue", "Thepantsoff",  5, 1),
  ("Takemto", "Slaughterhause", 6, 5),
  ("Yuno", "Yu Wa Na Buy", 7, 1),
  ("Sir Close", "Alot", 8, 7),
  ("T. Ruth", "Inadvertizin", 1, 9);
  






