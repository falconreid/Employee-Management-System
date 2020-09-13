DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department
(
  id INT PRIMARY KEY,
  dept_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roles
(
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT default 0,
  FOREIGN KEY (department_id) REFERENCES employee(role_id)
);

CREATE TABLE employee
(
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT default 0,
  manager_id INT default 0,
  FOREIGN KEY (role_id) REFERENCES employee(role_id),
  FOREIGN KEY (manager_id) REFERENCES employee(role_id)
);

INSERT INTO department
  (id, full_name)
VALUES
  ("0", "Engineering"),
  ("1", "Legal"),
  ("2", "Sales");

INSERT INTO roles
  (id, title, salary, department_id)
VALUES
  ("0", "Big Bad Ass Engineer", 120000, 0),
  ("1", "Mid Bad Ass Engineer", 65000, 0),
  ("0", "Big Lying Ass", 120000, 1),
  ("1", "Mid Lying Ass", 65000, 1),
  ("0", "Bad Ass Sales Guy", 120000, 1),
  ("1", "Avg Sales Guy", 65000, 1);




INSERT INTO employee
  (id, first_name, last_name, role_id, manager_id)
VALUES
  ("0", "Johnny", "Jingleheimer", 0, 0),
  ("1", "Jenny", "Johnsonville", 0, 1),
  ("0", "Sue", "Thepantsoff", 1, 0),
  ("1", "Tukemto", "Slaughterhause", 1, 1),
  ("0", "Yuno", "Yu Wa Na Buy", 0, 2),
  ("1", "Sir Close", "Alot", 1, 2);






