const inquirer = require('inquirer');
const fs = require('fs');
const mark = require('./generateMarkdown');


/* 
TODO:
-Table of contents with working links to each section
-License badge stuff, whatever that is.
-Change file name to README
-Put all questiosn into the questions array
-make licenses a list
*/

const questions = [];

const writeToFile = (fileName, data) => {
  fs.writeFile(`${fileName}.md`, `${data}`, (err) => {
    if(err) throw err;
    console.log('File Created!')
  })
}

let hahah;
async function init  ()  {
  let answerPrompt = await inquirer.prompt([{
        name: 'title',
        message: 'What is your project titled?',
        type: 'input'
         }, {
        name: 'installation',
        message: "Provide instructions for installation",
        type: 'input'
         }, {
          name: 'description',
          message: 'Provide a description of your project',
          type: 'input'
         }, {
        name: 'usage',
        message: 'Provide an example of how your project is used',
        type: 'input'
         }, {
        name: 'contributing',
        message: 'Provide instructions for contributing to the project, if any.',
        type: 'input'
         }, {
        name: 'tests',
        message: 'Provide instructions for testing your application',
        type: 'input',
         }, {
        name: 'github',
        message: 'What is your GitHub username?',
        type: 'input',
           },
           {
         name: 'email',
        message: 'What is an email for people to reach you with questions?',
        type: 'input',
             },{
        name: 'license',
        message: 'What license is your project produced under?',
        type: 'input'
         }
        ])
         .then(answers => {
          hahah = answers;
         })
        console.log(mark.generateMarkdown(hahah));
        writeToFile("TestFile", mark.generateMarkdown(hahah))
      }

// Function call to initialize app
init();
