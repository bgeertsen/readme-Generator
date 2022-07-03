// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/readme-template.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a discription for you project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('please enter installation instructions for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage informations for your project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter the usage information for the project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the guidlines for contributing to this project.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter the guidlines for contribution.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test info.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter test info.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses would you like your project to use?',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter you GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your full email address',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your full email address.');
                return false;
            }
        }
    }
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


inquirer.prompt(questions)
    .then(readmeData => {
        return generateReadme(readmeData);
    })
    .then(README => {
        console.log(README);
    })