const fs = require('fs');
const { createServer } = require('http');
// Вместо да райтваме html ще направим read stream от файл index.html и ще го пайпнем към респонса. Това автоматично ще прочете цеия файл, ща го райтне към респонса и когато файловия стрийм пусне end съобщение, пайпването ще извика end на респонс стрийма, което ще го приключи.

createServer((req, res) => {
    if (req.method == 'GET') {
        const reader = fs.createReadStream('./index.html');
        reader.pipe(res);
    } else if (req.method == 'POST') {
        const writer = fs.createWriteStream('./pipeResponse/client_log.txt');
        req.pipe(writer).on('close', () => {
            res.statusCode = 204;
            res.end();
        })
    }

}).listen(3000);

