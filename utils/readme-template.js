module.exports = templateData => {
    // destructure input data by section
    const { title, description, installation, usage, contribution, test, license, username, email } = templateData


    return `
    # ${title}

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


    ## License

    ${license}


    ## Contributing

    ${contribution}

    ## Tests

    ${test}


    ## Questions

    If you have any additional questions about this project feel free to reach out!
    GitHub: ${username}
    Email: ${email}
    `;
};