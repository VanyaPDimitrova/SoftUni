const fs = require('fs');

// --- Read File ---
// Synchronous version 
function readFileSyncVersion() {
    const dataSync = fs.readFileSync('./demo.html');
    console.log(dataSync.toString());
}
    
// Asynchronous version - receive callback, that takes data
function readFileAsyncVersion() {
    fs.readFile('./demo.html', (err, data) => {
        if (err != null) {
            // handel error - can test with a file that doesn't exist: './demo1.html'
            console.log('Error encountered: ', err.message);
            return;
        }
    
        console.log(data.toString());
    })
    
    console.log('End of code!');
}


// --- Write file ---
const data = [1, 2, 3, 4];

// Synchronous version 
function writeFileSyncVersion() {
    // create file data.json with data in it
    fs.writeFileSync('./data.json', JSON.stringify(data));
    const dataSync = fs.readFileSync('./data.json');
    const dataF = JSON.parse(dataSync);
    console.log(dataF);
    dataF.push(5);
    console.log(dataF);
    fs.writeFileSync('./data.json', JSON.stringify(dataF));
}

// writeFileSyncVersion(); 
// console.log('Code completed');

// Asynchronous version - receive callback, that 
function writeFileAsyncVersion() {
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        console.log('Write completed');
    });
}

writeFileAsyncVersion();
console.log('Code completed');
