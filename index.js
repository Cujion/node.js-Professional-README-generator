// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// an array of questions for user input
const questions = [{
    name: 'title',
    message: 'What is the title of your project?'
},
{
    name: 'description',
    message: 'Write a description of the What, Why, and How your project works along with inspiration on creating the project.'
},
{
    name: 'installation',
    message: 'Give an explanation (if needed) on how to install your application.'
},
{
    name: 'usage',
    message: 'Short descriptive explanation on how to use your application.'
},
{
    name: 'collaborators',
    message: 'Add any sources or contributors on your application.'
},
{
    name: 'tests',
    message: 'Write possible ways someone can test out your application.'
},
{
    type: 'list',
    name: 'license',
    message: 'Select a license you wish to use for your application.',
    choices: ['GNU GPLv3', 'MIT License', 'Apache License 2.0', 'The Unlicense'],
    default: 'MIT License'
},
{
    name: 'github',
    message: 'Enter your Github username.'
},
{
    name: 'email',
    message: 'Write is your Email?'
}
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${ fileName }.md`, generateMarkdown(data), 'utf-8', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(`Successfully generated data for ${fileName}.md`);
        }
    })
}


// function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
        writeToFile(response.title, response);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
