class readmeFile {
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
    ${responses.Description}

    ## Installation
    ${responses.Installation}

    ## Usage
    ${responses.Usage}

    ## License
    ${responses.License}

    ## Contribution
    ${responses.Contribution}

    ## Testing Instructions
    ${responses.Tests}

    ## Questions
    - GitHub Username: ${responses.GitHub}
    - Email: ${responses.Email}
    `
    }
};

module.exports = readmeFile