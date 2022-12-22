const inquirer = require('inquirer');
const fs = require('fs');
const mark = require('./generateMarkdown');


const questions = [{
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
  type: 'list',
  choices: ["Apache 2.0", "Creative Commons", "MIT", "Mozilla"]
   }
  ];

const writeToFile = (fileName, data) => {
  fs.writeFile(`${fileName}.md`, `${data}`, (err) => {
    if(err) throw err;
    console.log('File "' + `${fileName}` +'" Created!')
  })
}

let userAnswers;
async function init  ()  {
  let answerPrompt = await inquirer.prompt(questions)
         .then(answers => {
          userAnswers = answers;
         })
        writeToFile("README", mark.generateMarkdown(userAnswers));
      }

// Function call to initialize app
init();
