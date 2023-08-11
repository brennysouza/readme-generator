// TODO: Include packages needed for this application
// Inquirer package included in package.json

// These are variables needed 
const fs = require('fs');
const inquirer = require('inquirer');
const readmeFile = require('./lib/readmeFile');
const markdownIt = require('markdown-it')();
// const badgeUrl = `https://img.shields.io/badge/license-${encodeURIComponent(responses.License)}-brightgreen`;


// TODO: Create an array of questions for user input
// This is an array of objects for the file. Once generated, these will show up on readme. Once initiated with node, these will be the prompted questions that will generate the readme. 
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

// This code removes the html tags, and will only display the data between each html tag so that when the readme file is generated, it wont show html tags. 
function removeHTMLTags(htmlContent) {
    const regex = /<[^>]*>/g;
    return htmlContent.replace(regex, '');
}

// TODO: Create a function to write README file
// This function will allow the the data to render as html and will remove any html tags once rendered. 
function writeToFile(fileName, data) {
    const htmlContent = markdownIt.render(data);
    const markdownContent = removeHTMLTags(htmlContent);
    fs.writeFile(fileName, markdownContent, (err) => 
        err ? console.error(err) : console.log('README successfully generated!')
    );
}

// TODO: Create a function to initialize app
// The code below is the data that will be inputted in its designated place within the readme file. 
function init() {
    inquirer.prompt(questions).then((responses, data) => { 
        const readmeContent = readmeFile.generateReadme({
            Title: responses.Title,
            Description: responses.Description,
            Installation: responses.Installation,
            Usage: responses.Usage,
            License: responses.License,
            Contribution: responses.Contribution,
            Tests: responses.Tests,
            GitHub: responses.GitHub.replace(/\s+/g, '-'),
            Email: responses.Email,
        });

        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();