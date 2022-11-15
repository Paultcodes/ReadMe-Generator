// TODO: Create a function to generate markdown for README
function generateMarkdown(info) {
  let licenseBadge;
  if (info.license === "Apache License 2.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (info.license === "MIT License") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (info.license === "Mozilla Public License 2.0") {
    licenseBadge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  return `# ${info.title}

  ${licenseBadge}
  ## Description
  ${info.description}

  ## Table Of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#test)

  * [Questions](#questions)

  

  ## Installation <a name="installation"></a>
  ${info.install}

  ## Usage <a name="usage"></a>
  ${info.usage}

  ## License <a name="license"></a>

  This project is licensed under the ${info.license}

  ## Contributing <a name="contributing"></a>
  ${info.contribution}

  ## Tests <a name="test"></a>
  ${info.test}

  ## Questions <a name="#questions"></a>

  If you have any questions about the repo, open an issue or contact me directly at ${info.email}. You can find more of my work at [${info.github}](https://github.com/Paultcodes?tab=repositories).

`;
}

module.exports = { generateMarkdown };
