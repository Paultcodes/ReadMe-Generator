//Required packages for the application
const inquirer = require("inquirer");
const fs = require("fs");
const genReadMe = require("./utils/generateMarkdown.js");
const { title } = require("process");

//Prompts for user to create the ReadMe file
inquirer
  .prompt([
    {
      type: "input",
      message: "Project Title:",
      name: "title",
    },
    {
      type: "input",
      message: "Description:",
      name: "description",
    },
    {
      type: "input",
      message: "Installation Instructions:",
      name: "install",
    },
    {
      type: "input",
      message: "Usage Information:",
      name: "usage",
    },
    {
      type: "input",
      message: "Contribution Guidelines:",
      name: "contribution",
    },
    {
      type: "input",
      message: "Test Instructions:",
      name: "test",
    },
    {
      type: "list",
      name: "license",
      message: "Choose A License",
      choices: [
        "Apache License 2.0",
        "MIT License",
        "Mozilla Public License 2.0",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "What Is Your GitHub Username?",
    },
    {
      type: "input",
      name: "email",
      message: "Email:",
    },
  ])
  .then((data) => {
    fs.writeFile(
      `READMETEST.md`,
      genReadMe.generateMarkdown(data),

      (err) =>
        err ? console.log(err) : console.log("Your ReadMe File Was Created!")
    );
  });
