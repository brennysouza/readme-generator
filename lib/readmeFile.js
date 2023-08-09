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
    **IMPORTANT:** This application is covered by the ${responses.License}.

    ## Contribution
    ${responses.Contribution}

    ## Tests
    ${responses.Tests}

    ## Questions
    Feel free to reach me at any time by these two contact methods below should you have any additional questions, comments, or concerns!
    
    - GitHub Username: [${responses.GitHub}](https://github.com/brennysouza/readme-generator)
    - Email: ${responses.Email} `
    }
}

module.exports = readmeFile;