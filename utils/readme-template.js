// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
    if (license === 'mit') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    if (license === 'mpl-2.0') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    if (license === 'apache-2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    if (license === 'gpl-3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  // instead of making a function for the license link I decided to do it all in the renderLicenseSection function
  function renderLicenseLink(license) {}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string

  // This function will return an empty string if there was no license selected.
  // If there was a license selected it will returns the license section AND passes the license into the link to dynamically create a link 
  // for the chosen license.
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }

    return `
## License
    
[License Info!](https://choosealicense.com/licenses/${license}/)

`
  }

module.exports = templateData => {
    // destructure input data by section
    const { title, description, installation, usage, contribution, credits, license, username, email } = templateData


    return `
# ${title}            ${renderLicenseBadge(license)}

## Description 

${description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${installation}


## Usage 

${usage}


## Contributing

${contribution}

## Credits

${credits}


## Questions

If you have any additional questions about this project feel free to reach out!<br/>
GitHub: [${username}](https://github.com/${username})<br/>
Email: ${email}<br/>


${renderLicenseSection(license)}
`;
};