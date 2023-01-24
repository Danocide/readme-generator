// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer
  const prompts = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is a description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Do you have any usage conditions for the user?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is a good contact email for you?',
    },
    {
        type: 'list',
        message: 'What license are you using for your project?',
        name: 'license',
        choices: ['No License', 'Apache 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License'],
    },
  ]

  function writeToReadme(filename, data) {
    fs.writeFile(`${filename}`, data, (err) =>
    err ? console.log(err) : console.log('Success!')
    )
  };


// TODO: Create a function to initialize app

function init() {
    inquirer
    .prompt(prompts)
    .then((answers) => {
        let markdown = generateMarkdown(answers)
        writeToReadme('README.md', markdown)
    });
};

// Function call to initialize app
init();

