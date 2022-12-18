// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
    \n## Description
    \n${data.description}
    \n## Installation
    \n${data.description}
    \n## Usage
    \n${data.usage}
    \n## Testing
    \n${data.tests}
    \n## Contributing
    \n${data.contributing}
    \n## Questions
    \nIf you have additional questions, you can find me on [Github](https://github.com/${data.github}) or at my email (${data.email}))
    \n## License
    \n${data.license}
`;
}

exports.generateMarkdown = generateMarkdown;

// object???