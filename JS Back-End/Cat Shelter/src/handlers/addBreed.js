const { addBreed } = require('../model');
const { readTemplate, layout } = require('../util')

async function addBreedHandler(req, res) {
    const template = await readTemplate('addBreed');
    
    res.writeHead('200' , [
        'Content-type', 'text/html',
    ])

    res.write(await layout(template));
    res.end();
}

async function postBreedHandler(req, res) {
    let data = '';

    req.on('data', (chunk) => data += chunk.toString());
    req.on('end', async () => {
        const formData = new URLSearchParams(data);
        const breed = formData.get('breed');

        if (breed) {
            await addBreed(breed);

            // redirect to the home page
            res.writeHead(302, [
                'Location', '/'
            ]);
            res.end();
        }  else {
            res.writeHead(301, [
                'Location', '/cats/add-breed'
            ]);
            res.end();
        }
    });

    // when this code is still here it dose not redirect and appears an error: 
    // Error [ERR_HTTP_HEADERS_SENT]: Cannot write headers after they are sent to the client
    // it is because we have more than one  res.end(); !!!!!!
    // res.statusCode = 204;
    // res.end();
}

module.exports = {
    addBreedHandler,
    postBreedHandler,
};
