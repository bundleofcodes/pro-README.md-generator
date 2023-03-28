function renderLicenseBadge(License) {
  if (License !== 'None') {
    return `![Github license](https://img.shields.io/badge/license-$(license)-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(License) {
  if (License !== 'None') {
    return `\n" [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(License) {
  if (License !== 'None') {
    return `## License
    
    This project is licensed under the $(License) license.`;
  }
  return '';
}

function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description:

  ${data.description}
 
  ## Table of Contents:

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:

  ${data.installation}

  ## Usage:

  ${data.usage}

  ## License:

  ${data.license}

  ## Contributing:

  ${data.contributing}

  ## Tests:

  ${data.tests}

  ## Questions:

  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com)`;
}

module.exports = generateMarkdown;
