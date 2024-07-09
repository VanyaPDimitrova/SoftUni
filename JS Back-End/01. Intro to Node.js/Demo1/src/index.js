const xlsx = require('xlsx');
const fs = require('fs'); // core module - file system
const { print, add, data } = require('./util');
 
print('Hello world!' + add(3, 5));
print(data[1]);

fs.writeFileSync('./output.txt', 'Hello world!');
