// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "APACHE") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "BOOST") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  }
  if (license === "APACHE") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "BOOST") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License  
  ${renderLicenseLink(license)}
  
  ${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data);
  return `
  # ${data.title}

## ✏️ Table of Contents

- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [About](#about)
- [Contribution](#contribution)
- [Questions](#questions)

${renderLicenseSection(data.license)}

## 📄 Description 

 ${data.description}

## 💿 Installation

 ${data.installation}

## 🧰 Usage

 ${data.usage}

## 🧑‍💻 Contribution
 ${data.contribution}

## 📝 About
 ${data.about}


## ❔Questions
- ${data.email}
- ${data.github}

`;
}

module.exports = generateMarkdown;
