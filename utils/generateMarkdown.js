// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === '') {
    return '';
  } else {
    return `![${license}](${renderLicenseLink(license)})`
  }
}

// function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU GPLv3': return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'MIT License': return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'Apache License 2.0': return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    case 'The Unlicense': return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
    case '': return ''
  }
}

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  } else {
    return renderLicenseBadge(license);
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Badges](#badges)
  * [Questions](#questions)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## License
  
  This project is licensed under the ${data.license}

  ## Contributing
  
  ${data.collaborators}
  
  ## Tests
  
  ${data.tests}
  
  ## Badges
  
  ${renderLicenseSection(data.license)}

  ## Questions
  * For any more questions, reach me at:
  * [Github](https://github.com/${data.github})
  * [email](${data.email})
`};

module.exports = generateMarkdown;
