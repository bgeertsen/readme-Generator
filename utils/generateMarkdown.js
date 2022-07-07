const fs = require('fs');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve('Generated README can be found in ./dist/README.md')
    })
  })
  
}

module.exports = generateMarkdown;
