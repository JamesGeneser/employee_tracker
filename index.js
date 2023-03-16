const inquirer = require("inquirer");

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
        "update and employee role",
      ],
    },
  ])
  .then((answer) => {
    console.log(answer);
    if(answer == "view all departments")
  });
