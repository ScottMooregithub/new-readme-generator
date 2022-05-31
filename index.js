// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please give your project a description.",
  },
  {
    type: "list",
    name: "license",
    message: "Did this project use any licenses?",
    choices: ["MIT", "APACHE", "BOOST"],
  },
  {
    type: "input",
    name: "installation",
    message: "What packages did you use on this project?",
  },
  {
    type: "input",
    name: "test",
    message: "What command were you using to run tests?",
  },
  {
    type: "input",
    name: "usage",
    message: "What do I need to know to use this application?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Who contributed to the creation of this application?",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide a valid email address",
  },
  {
    type: "input",
    name: "github",
    message: "Please link your github link repository",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      // console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  const inquirerResponses = await inquirer.prompt(questions);
  writeToFile("./README.md", generateMarkdown(inquirerResponses));
  //console.log(inquirerResponses);
}

// Function call to initialize app
//init();

writeToFile(
  "./README.md",
  generateMarkdown({
    title: "new",
    description: "fuck",
    license: "MIT",
    installation: "fuck",
    usage: "fuck",
    contribution: "fuck",
    email: "fuck",
    github: "fuck ",
  })
);
