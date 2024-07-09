const fs = require('fs');
const path = require('path');

// use synchronously reeding of fs just for study. Not recommended, because it blocks server and requests will be pending 
function readFile(filePath) {
    const data = fs.readFileSync(path.join('./', filePath));
    return data.toString();
}

module.exports = {
    readFile,
};
