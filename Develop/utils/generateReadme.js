const fs=require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateReadme = data => {
  return `
       # ${data.title}
           
       ## Description
       ${data.disc}
             
       ## Installation
       ${data.install}
 
       ## Usage
       ${data.use}
 
       ## Credits
       ${data.credits}
 
       ## License
       ${data.license} 
      
       ## Feature
       ${data.feature}
     
       ## How to contribute
       ${data.contribute}
 
  `;
};

const writeReadme = data => {
  return fs.writeFile('./develop/utils/README.md',data, err => { if (err) return err;});
};



module.exports = {generateReadme,writeReadme};
