const readline = require('readline');
const fs = require('fs');
const path = require('path');
/* eslint import/no-extraneous-dependencies: ['off'] */
const addStream = require('add-stream');
const cc = require('conventional-changelog');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main(internalVersion) {
  const changelogFile = 'CHANGELOG.md';
  const tempFile = path.join(__dirname, `_temp${Math.random()}`.split('.')[1]);
  cc({
    preset: 'angular',
    pkg: {
      transform(pkg) {
        /* eslint no-param-reassign: ['off'] */
        pkg.version = `v${internalVersion}`;
        return pkg;
      }
    }
  }).pipe(addStream(fs.createReadStream(changelogFile)))
    .pipe(fs.createWriteStream(tempFile))
    .on('finish', () => {
      fs.createReadStream(tempFile)
        .pipe(fs.createWriteStream(changelogFile))
        .on('close', () => {
          fs.unlinkSync(tempFile);
          console.log(`Generated release note at ${changelogFile}`);
        });
    });
}


const version = process.argv[2] || process.env.VERSION;

if (!version) {
  rl.question('Please input the version: ', rlVersion => {
    main(rlVersion);
    rl.close();
  });
} else {
  main(version);
}
