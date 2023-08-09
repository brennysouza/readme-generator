class readmeFile {
    static generateReadme(responses) {
        return `
    # ${responses.Title}

    ![License](https://img.shields.io/badge/license-${encodeURIComponent(responses.License)}-brightgreen)


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
    This application is covered by the ${responses.License}.

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