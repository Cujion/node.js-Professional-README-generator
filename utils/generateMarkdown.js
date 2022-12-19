// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === '') {
    return '';
  } else {
    return `![${license}](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU GPLv3': return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'MIT License': return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'Apache License 2.0': return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    case 'The Unlicense': return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
    case '': return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  } else {
    return renderLicenseSection(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
