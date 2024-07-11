const fs = require('fs');
// create stream that read from the terminal and write directly in a file
// start file in terminal with command node ./readingUserInput/readingUserInput.js

//1. // process.stdin - read from terminal and log in to terminal
// process.stdin.on('data', (chunk) => {
//     console.log('>>>', chunk.toString());
// });

//2. // read from terminal and write in file output.txt
// const writer = fs.createWriteStream('./output.txt');
// process.stdin.on('data', (chunk) => {
//     writer.write(chunk.toString());
// });

//3. // pipe dos both from 2. - read from terminal and write in to file. But it delete file content. It do not writes in the end of file. 
const writer = fs.createWriteStream('./readingUserInput/output.txt');
process.stdin.pipe(writer);
