const inquirer = require("inquirer");
const { type } = require("os");

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
