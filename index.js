// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

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
