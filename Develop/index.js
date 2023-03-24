//Declaring global variables for project//
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to my Professional README.md Generator")
console.log("Answer the following questions to generate a high quality README for your project");
const path = require('path');
//Creating an array of questions for user input//
const questions = [
    //Github username//
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?',
        validate: github_input => {
            if (github_input) {
                return true;
            } else {
                console.log('Please enter your Github Username');
            }
        }
    },
    //Email Address//
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: email_input => {
            if (email_input) {
                return true;
            } else {
                console.log('Please enter your email address:');
                return false;
            }
        }
    },
    //Project Title//
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: your_input => {
            if (your_input) {
                return true;
            } else {
                console.log('Enter a Title to continue:');
                return false;
            }
        }
    },
    //Description of Project//
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Provide a short description of your project to continue:');
                return false;
            }
        }
    },
    //Licensing information available for the project//
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license that will best fit your project:',
        choices: ['Apache 2.0','GPL 3.0','BSD 3','MIT','None'],
        validate: your_license => {
            if (your_license) {
                return true;
            } else {
                console.log('Please select a license name for your project to continue:');
            }
        }
    },
    //Installation instructions for the project//
    {
        type: 'input',
        name: 'installation',
        question: 'What command should be run to install dependencies? (npm i)',
        default: 'npm i'
    },
    //Test instructions (npm test)//
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    //Usage information for the project//
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        validate: your_usage => {
            if (your_usage) {
                return true;
            } else {
                console.log('Provide information on what the user needs to know about using the repo to continue');
                return false;
            }
        }
    },
    //list Contributors for the project
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
        validate: your_contribution => {
            if (your_contribution) {
                return true;
            } else {
                console.log('Provide information on what the user needs to know about contributing to the repo to continue');
            }
        }
    },
];

//Function to write README file//
function writeToFile(fileName, data, err) {
            if (err) {
                console.log(err) 
            } else {
                fs.writeFileSync(path.join(process.cwd(),fileName),data)
            }
    // fs.writeFileSync(fileName, data, (err) => {
    //     if (fileName, data) {
    //         console.log("Successful! Your README.md file has been generated!")
    //         return true;
    //     } else {
    //         console.log(err)
    //         return false
    //     }
    // });
};

//Function to initialize application//
function init() { 
    inquirer.prompt(questions)
    .then((userInput) => {
        console.log(userInput)
        console.log("Successful! Your README.md file has been generated!")
        writeToFile("README.md", generateMarkdown({...userInput}));
    });
};

//Function call to initialize application//
init();