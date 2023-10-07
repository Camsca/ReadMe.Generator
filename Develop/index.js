//packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')

//  Array of questions for user input
const questions = [
    {
        type:'input',
        name:'projectTitle',
        message:'Enter your project title:',
    }, 
    {
        type:'input',
        name:'description',
        message:'Provide a short description of your project:' ,
    },
   {
        type: 'input',
        name: 'motivation',
         message: 'What was your motivation for this project?',
    },
    {
        type: 'input',
        name: 'buildReason',
        message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
    },
   {
        type: 'input',
        name: 'problemSolved',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'whatLearned',
        message: 'What did you learn?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
erdf