// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genReadMe = require("./utils/generateMarkdown.js");
const { title } = require("process");



// TODO: Create an array of questions for user input
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
      choices: ["MIT", "N/A"],
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
    console.log(data);
    fs.writeFile(
      `${data.title.toLowerCase().split(' ').join('')}.md`,
      genReadMe.generateMarkdown(data), 

      (err) => (err ? console.log(err) : console.log("Your ReadMe File Was Created!"))
    );
  });



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


