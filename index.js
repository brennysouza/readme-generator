// TODO: Include packages needed for this application
// Inquirer package included in package.json

// TODO: Create an array of questions for user input
const questions = [];

// const inquirer = require('inquirer');

questions
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'Project title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'Installation Instructions',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples on how to use your project.',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'Credits',
    },
    {
        type: 'input',
        message: 'What is the license found on your repo? Type N/A if there are none.',
        name: 'License',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();