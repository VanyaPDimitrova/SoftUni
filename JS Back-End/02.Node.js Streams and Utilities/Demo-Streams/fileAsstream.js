const fs = require('fs');

// read small file
function readSmallFile() {
    // highWaterMark: 16 - divided receiving text in to 16 bits chunks
    const reader = fs.createReadStream('./demoLorem100.html', { highWaterMark: 16 });
    let data = '';
    
    reader.on('data', (chunk) => {
        console.log('>>>', chunk.toString());
        data += chunk;
    });
    reader.on('end', () => {
        console.log('Finished');
        console.log(data);
    });
}

// read big file
function readBigFile() {
    // don't save in data, because the stream will be crashed
    const reader = fs.createReadStream('./demoLorem1000000.html', { highWaterMark: 360 });
    
    reader.on('data', (chunk) => {
        console.log('>>>', chunk.toString());
    });
    reader.on('end', () => {
        console.log('Finished');
    });
}
