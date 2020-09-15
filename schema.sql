DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department
(
    id INT NOT NULL,
    dept_name VARCHAR(30),
    PRIMARY KEY(id)
);

    CREATE TABLE roles
    (
        id INT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY(department_id) REFERENCES department(id),
  PRIMARY KEY(id)
);

        CREATE TABLE employee
        (
            id INT NOT NULL ,
            first_name VARCHAR(30),
            last_name VARCHAR(30),
            role_id INT,
            manager_id INT,
            FOREIGN KEY(role_id) REFERENCES roles(id),
            FOREIGN KEY (manager_id) REFERENCES employee(role_id),
            PRIMARY KEY (id)
);