// function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.title}

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Deployment](#Deployment)
- [Contributors](#contributors)
- [Languages](#languages)
- [Deployment](#deployment)
- [Questions](#questions)



## Description:
![${response.license}](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

${response.description}

## Install:

${response.install}

## Usage:
${response.usage}

## Deployment:
${response.deployment}

## Contributors
${response.contributors}

## Languages:
${response.languages}

## License:
  To learn more about the License, click on the link below.

-[${response.license}](https://opensource.org/licenses/${response.license})

## Questions:
  For questions about the generator or to see other applications
  I have contributed to, please go to my Github page at the
  link:

-[GitHub Profile](https:/github.com/${response.username})

For additional questions please contact me at my email at:

${response.email}
`;
}

module.exports = generateMarkdown;
