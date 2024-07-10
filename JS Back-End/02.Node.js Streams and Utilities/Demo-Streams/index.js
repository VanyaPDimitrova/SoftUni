const { createServer } = require('http');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST">
        <h1>Send data to server</h1>
        <p>Username: <input name="username"></p>
        <p>Password: <input name="password" type="password"></p>
        <input type="submit" value="Sign in">
    </form>
</body> 
</html>`;

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
