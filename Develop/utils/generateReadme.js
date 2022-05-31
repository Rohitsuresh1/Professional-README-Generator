const fs=require('fs');

generateBadge=data=>{
  const l=data.license;
  if(l==='MIT'){
    return `![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (l==='Boost'){
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  else if (l==='Apache'){
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (l==='BSD'){
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (l==='Other'||l==='None')
    return '';
  else
    return '';
};


generateUsage=data=>{
  if (data.use)
    return `
<a name="usage"></a>
## Usage
${data.use}
    `;
  else
   return '';
};

generateContents=data=>{
var contentTable=["- [Installation](#inst)"];
if(data.use)
  contentTable.push("- [Usage](#usage)");
else
  contentTable.push(" ");
contentTable.push("- [License](#license)");
if(data.contribute)
  contentTable.push("- [How to Contribute](#contributing)");
else
  contentTable.push(" ");
if(data.feature)
  contentTable.push("- [Feature](#feature)");
else
  contentTable.push(" ");
if(data.tests)
  contentTable.push("- [Tests](#tests)");
else
  contentTable.push(" ");
contentTable.push("- [Questions](#questions)");
if(data.credits)
  contentTable.push("- [Credits](#credits)");
else
  contentTable.push(" ");

  return ` 
## Table of Contents
${contentTable[0]}
${contentTable[1]}
${contentTable[2]}
${contentTable[3]}
${contentTable[4]}
${contentTable[5]}
${contentTable[6]}
${contentTable[7]}

  `;
}
generateCredits=data=>{
  if (data.credits)
  return `
<a name="credits"></a>
## Credits
${data.credits}
  `;
else
 return '';
};

generateFeature=data=>{
  if (data.feature)
  return `<a name="feature"></a>
## Feature
${data.feature}
  `;
else
 return '';
};

generateContribute=data=>{
  if (data.contribute)
  return `
<a name="contributing"></a>
## How to contribute
${data.contribute}
  `;
else
 return '';
};

generateTest=data=>{
  if (data.tests)
  return `<a name="tests"></a>
## Tests
${data.tests}
  `;
else
 return '';
};


const generateReadme = data => {
  return `
${generateBadge(data)}

# ${data.title}
           
## Description
${data.disc}
${generateContents(data)}
<a name="inst"></a>
## Installation
${data.install}
${generateUsage(data)}
<a name="license"></a>
## License
This application is covered under ${data.license} licensing.
${generateContribute(data)}
${generateFeature(data)}
${generateTest(data)}
<a name="questions"></a>
## Questions
For any questions you can contact me at:
email: ${data.email}
username: ${data.userName} GitHub: https://github.com/${data.userName}
${generateCredits(data)}  
`;
};

const writeReadme = data => {
  return fs.writeFile('./develop/README.md',data, err => { if (err) return err;});
};



module.exports = {generateReadme,writeReadme};
