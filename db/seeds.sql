
INSERT INTO departments (name)
VALUES ("finance"),
        ("marketing"),
        ("human resources"),
        ("operations management");

INSERT INTO roles (title, salary, department_id)
VALUES ("Client Liason", 200, 002),
        ("Junior Director",  23500, 004),
        ("Employee Coordinator", 12050, 003),
        ("Numbers Associate",  90100, 001),
        ("Senior Partner",  30290, 004),
        ("Graphic Designer", 30300, 002);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Krom", "Drosbin",001, 30),
("Bax", "Nosburr",004, 22),
("Callie", "Jocktaylor", 003, 44),
("Pierre", "French",002, 59),
("Eugene", "Spackle",005, 75);