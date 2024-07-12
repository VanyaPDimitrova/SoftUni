const { getBreeds } = require('../model');
const { readTemplate, layout } = require('../util');

function breedFragment(breed) {
    return `<option value=${breed}>${breed}</option>`
}

async function addCatHandler(req, res) {
    const template = await readTemplate('addCat');

    const breads = await getBreeds();
    const html = template.replace('%%breeds%%', breads.map(breedFragment).join('/n'));

    res.writeHead('200', [
        'Content-type', 'text/html'
    ]);

    res.write(await layout(html));
    res.end();
}

async function postCatHandler(req, res) {
    let data = '';

    req.on('data', (chunk) => data += chunk.toString());
    req.on('end', () => {
        const formData = new URLSearchParams(data);
        console.log(formData);
        // console.log(new URLSearchParams(data));
    });

    res.statusCode = 204;
    res.end();
}

module.exports ={
    addCatHandler,
    postCatHandler,
}
