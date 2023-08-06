class readMeFile {
    static generateReadme(responses) {
        return `
    # ${responses.Title}

    ## Table of Contents 
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contribution](#Contribution)
    - [Tests](#Tests)
    - [Questions](#Questions)

    ## Description 
    ${responses.description}

    ## Installation
    ${responses.installation}

    ## Usage
    ${responses.usage}

    ## License
    ${responses.license}

    ## Contribution
    ${responses.contribution}

    ## Testing Instructions
    ${responses.tests}

    ## Questions
    ${responses.github}
    ${responses.email}
    `
    }
}

module.exports = readMeFile