class readmeFile {
    static generateReadme(responses) {
        return `
    # ${responses.Title}

    ## Table of Contents 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)

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

    ## Tests
    ${responses.Tests}

    ## Questions
    - GitHub Username: ${responses.GitHub}
    - Email: ${responses.Email}
    `;
    }
}

module.exports = readmeFile;