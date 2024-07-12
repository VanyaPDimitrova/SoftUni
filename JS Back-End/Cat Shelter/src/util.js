const fs = require('fs/promises');
const path = require('path');

const searchBar = `
        <form action="/search">
            <input type="text">
            <button type="button">Search</button>
        </form>`;

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

async function layout(body, hasSearch) {
    let layoutTemplate = await readTemplate('layout');
    let search = ''; 

    if (hasSearch) {
        search = searchBar;
    }

    layoutTemplate = layoutTemplate.replace('%%searchBar%%', search);
    layoutTemplate = layoutTemplate.replace('%%body%%', body);

    return layoutTemplate;
}

module.exports = {
    readFile,
    readTemplate,
    layout,
};
