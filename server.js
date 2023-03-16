const routes = require("./routes/index");
const sequelize = require("./config/connection");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { hostname } = require("os");
const http = require("http");
// const Departments = require("./models/tables");

// const PORT = process.env.PORT || 3009;

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "drowssap",
    database: "company_directory",
  },
  console.log(`Connected to the company directory.`)
);

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Welcome to the company directory.");
// });
inquirer
  .prompt([
    {
      type: "list",
      message:
        "Welcome to the company database! What data would you like to see?",
      name: "initialChoice",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "update an employee role",
      ],
    },
  ])
  .then((answer) => {
    // console.log(answer);
    if ((answer = "view all departments")) {
      console.log("show department table");
    } else if ((answer = "view all roles")) {
      console.log("show roles table");
    } else if ((answer = "view all employees")) {
      console.log("show employee table");
    } else if ((answer = "add a department")) {
      console.log("add department");
    } else if ((answer = "add a role")) {
      console.log("add role");
    } else if ((answer = "update an employee role")) {
      console.log("update employee role");
    }
  });

// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// server.listen(PORT, hostname, () => {
//   console.log(`server is running at http://${hostname}:${PORT}`);
// });
