const fs = require('fs');
const YAML = require('yaml');

module.exports = function (fileName) {
    return new Promise((resolve) => {
        try {
            resolve(YAML.parse(fs.readFileSync(fileName, 'utf-8'), options = { prettyErrors: true }));
        } catch (err) {
            resolve({});
            console.log(`[ERROR] [FILE: ${fileName}:${err.linePos.start.line}:${err.linePos.start.col} (Line: ${err.linePos.start.line})] ${err.name}: ${err.message}`);
        }
    })
}