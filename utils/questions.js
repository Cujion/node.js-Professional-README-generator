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

module.exports = questions;