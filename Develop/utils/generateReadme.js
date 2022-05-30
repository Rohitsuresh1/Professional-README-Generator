const fs=require('fs');


generateUsage=data=>{
  if (data.use)
    return `
## Usage
${data.use}
    `;
  else
   return '';
};

generateCredits=data=>{
  if (data.credits)
  return `
## Credits
${data.credits}
  `;
else
 return '';
};

generateFeature=data=>{
  if (data.feature)
  return `
## Feature
${data.feature}
  `;
else
 return '';
};

generateContribute=data=>{
  if (data.contribute)
  return `
## How to contribute
${data.contribute}
  `;
else
 return '';
};

// TODO: Create a function to generate markdown for README
const generateReadme = data => {
  return `
# ${data.title}
           
## Description
${data.disc}
      
## Installation
${data.install}
${generateUsage(data)}
${generateCredits(data)}
## License
${data.license} 
${generateFeature(data)}
${generateContribute(data)}

  `;
};

const writeReadme = data => {
  return fs.writeFile('./develop/utils/README.md',data, err => { if (err) return err;});
};



module.exports = {generateReadme,writeReadme};
