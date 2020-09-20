// function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Link](#link)
- [Contributors](#contributors)
- [Languages](#languages)
- [License](#license)



## Description:

${response.description}

## Installation:

${response.installation}

## Usage:
${response.usage}

## Link:
${response.link}

## Contributors
${response.contributors}

## Languages:
${response.languages}

## License:
${response.license}

`;
}

module.exports = generateMarkdown;
