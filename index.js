// TODO: Include packages needed for this application
// Inquirer package included in package.json

const fs = require('fs');
const inquirer = require('inquirer');
const readmeFile = require('./lib/readmeFile');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples on how to use your project.',
        name: 'Usage',
    },
    {
        // Go on inquirer link and figure out how to add a list of licenses to choose as per challenge instructions
        type: 'list',
        message: 'What is the license found on your repo?',
        name: 'License',
        choices: ['MIT License', 'Apache 2.0 License', 'Mozilla Public License 2.0'],
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'Contribution',
    },
    {
        type: 'input',
        message: 'Write test instructions for your application.',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('README successfully generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => { 
        const readmeContent = readmeFile.generateReadme(responses);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();