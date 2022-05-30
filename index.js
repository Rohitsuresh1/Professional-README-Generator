const inquirer=require('inquirer');
const { generateReadme, writeReadme}=require('./Develop/utils/generateReadme');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter your Project Title: (Required)',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('You need to enter a project title!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'disc',
            message: 'Please enter the Project Description: (Required)',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('You need to enter a project description!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'install',
            message: 'How to install this project? (Requiered)',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('You need to enter How to install this project!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'use',
            message: 'Please provide examples of use: '
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Credits? '
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the license you are using for the project',
            choices: ['MIT','GNU','Apache','BSD','Other','None']
        },
        {
            type: 'input',
            name: 'feature',
            message: 'Features of your project? '
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How to contribute to your project? '
        }
    ])
};



promptUser().then(data=> { return generateReadme(data);}).then(readme=> {return writeReadme(readme)});

