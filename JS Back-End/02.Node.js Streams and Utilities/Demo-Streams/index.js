const fs = require('fs');
const { createServer } = require('http');

const html = fs.readFileSync('./index.html');

createServer((req, res) => {
    if (req.method == 'GET') {
        res.write(html);
        res.end();
    } else if (req.method == 'POST') {
        console.log('POST request');

        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
            console.log('Receiving Data', chunk.toString());
        });
        req.on('end', () => {
            console.log(body);
        });

        res.statusCode = 204;
        res.end();
    }
}).listen(3000);
