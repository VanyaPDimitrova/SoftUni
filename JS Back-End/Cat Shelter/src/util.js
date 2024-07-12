const fs = require('fs/promises');
const path = require('path');

/*
// use synchronously reeding of fs just for study. Not recommended, because it blocks server and requests will be pending 
function readFile(filePath) {
    const data = fs.readFileSync(path.join('./', filePath));
    return data.toString();
}
*/

// Return promise. Wen use call with await.
async function readFile(filePath) {
    const fileHandel = await fs.open(path.join('./', filePath), 'r');
    return fileHandel.createReadStream();
}

async function readTemplate(template) {
    const data = await fs.readFile(path.join('./views/', template + '.html'));
    return data.toString();
}

module.exports = {
    readFile,
    readTemplate,
};
