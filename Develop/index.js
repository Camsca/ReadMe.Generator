//packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const { error } = require('console');

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
   {// todo esto va a a ir en la misma descripion ???/
        type: 'input',
        name: 'motivation',
         message: 'What was your motivation for this project?',
    },
    {
        type: 'input',
        name: 'buildReason',
        message: 'Why did you build this project?',
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
    {///optional 
        type:'confirm',
        name:'tableofcontents?',
        message:' If your README is long, add a table of contents to make it easy for users to find what they need.Do you want to include a Table of Contents in your README? ',
        default:false,
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',

    },
    {
        type:'statement',
        name:'usage',
        message:'To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:\n\n```md\n![alt text](assets/images/screenshot.png)\n```',
    },
 {
        type:'input',
        name:'credits',
        message:'List your collaborators, if any, with links to their GitHub profiles.\n\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\n\nIf you followed tutorials, include links to those here as well.', 
   },
     {
       //option
       type:'confirm',
        name:'Features',
        message:'If your project has a lot of features, list them here... DO YOU WANT TO LIST THEM?',
        default:false,

    },  
     {//option
        type:'confirm',
        name:'How to Contribute',
        message:'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. Do you want to include future contributions?',
        default:false,
    },
    {
        type:'input',
        name:'Tests',
        message:'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',

    },
];

// function to write README file
function writeTo(fileName, data) {
    fs.writeFile(fileName,data,(error)=>{
        if(error){
            console.error(error);
        }else{
            console.log('README.md successfully created')
        }

    });
}

// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt(questions)
    .then((answers)=>{
        const readmeContent = `# ${answers.projectTitle}\n\n##${answers.description}\n\n`+
        `## Installation\n\n${answers.installation}\n\n` +
        `## Usage\n\n${answers.usage}\n\n` +
        `## Credits\n\n${answers.credits}\n\n`;

    if (answers.tableofcontents){
      readmeContent += '##Table of Contents\n\n';
      questions.forEach((question) => {
        if (!['motivation', 'buildReason', 'problemSolved', 'whatLearned'].includes(question.name)) {
        readmeContent += `- [${question.name}](#${question.name.toLowerCase()})\n`;
        }
        readmeContent += '\n';//linea nuevas
    });
    if (answers.Features) {
        readmeContent += `## Features\n\nAdd your features here...\n\n`;
    }
    if (answers['How to Contribute']) {
        readmeContent += `## How to Contribute\n\nProvide guidelines for contributions...\n\n`;
    }
    readmeContent += `## Tests\n\n${answers.Tests}\n`;
    const fileName = 'README.md'

// Function call to initialize app
init(); 
erdf