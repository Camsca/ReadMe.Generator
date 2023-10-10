
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/license-MIT-brightgreen',
    'GPL-3.0': 'https://img.shields.io/badge/license-GPL--3.0-blue',
    'Apache-2.0': 'https://img.shields.io/badge/license-Apache--2.0-blue',
    'BSD-2-Clause': 'https://img.shields.io/badge/license-BSD--2--Clause-blue',
    'CC-BY-SA-4.0': 'https://img.shields.io/badge/license-CC--BY--SA--4.0-blue',
    'EPL-2.0': 'https://img.shields.io/badge/license-EPL--2.0-blue',
    'Mozilla-2.0': 'https://img.shields.io/badge/license-MPL--2.0-blue',
    'Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue',
  };
  return licenseBadges[license] || 'https://img.shields.io/badge/license-Unknown-lightgrey';
}
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseBadge = renderLicenseBadge(license);
  return `## License\n\nThis project is licensed under the [${license}](${licenseBadge}) license.`;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
  ${licenseBadge}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${tableOfContentsSection}
  ${licenseSection ? '- [License](#license)\n' : ''}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  `;
  }
  module.exports={
    renderLicenseBadge,
    renderLicenseSection,
    generateMarkdown,
  }
  
