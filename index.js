// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
let init = ()  => {
    inquirer
    .prompt([{
        name: 'greeting',
        message: 'What would you like to say?',
        type: 'input'
         }])
    .then((answers) => {
      console.log(answers.greeting)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
