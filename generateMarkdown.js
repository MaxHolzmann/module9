function renderLicenseDesc(license) {
  switch(license) {
    case "Apache 2.0":
    return '"A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
    break;
    case "Creative Commons":
    return 'Creative Commons licenses give everyone from individual creators to large institutions a standardized way to grant the public permission to use their creative work under copyright law.'
    break;
    case "MIT":
    return 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
    break;
    case "Mozilla":
    return '"Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.';
    break;
  }
}

function renderLicense(license) {
  switch(license) {
    case "Apache 2.0":
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    break;
    case "Creative Commons":
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    break;
    case "MIT":
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
    case "Mozilla":
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
    return `\n# ${data.title}
    \n## Table of Contents
    \n[Description](##-Description)
    \n[Installation](##-Installation)
    \n[Usage](##-Usage)
    \n[Testing](##-Testing)
    \n[Contributing](##-Contributing)
    \n[Questions](##-Questions)
    \n[License Description](##-License-Descriptionnod)
    \n## Description
    \n${data.description}
    \n` + renderLicense(data.license) + `
    \n## Installation
    \n${data.installation}
    \n## Usage
    \n${data.usage}
    \n## Testing
    \n${data.tests}
    \n## Contributing
    \n${data.contributing}
    \n## Questions
    \nIf you have additional questions, you can find me on [Github](https://github.com/${data.github}) or at my email (${data.email}))
    \n## License Description
    \n` + renderLicenseDesc(data.license);
}

exports.generateMarkdown = generateMarkdown;

// object???