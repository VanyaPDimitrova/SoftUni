const fs = require('fs/promises');

const fileName = './data/cats.json';

async function readData() {
    const json = await fs.readFile(fileName);
    const data = JSON.parse(json.toString());

    return data;
}

async function writeData(data) {
    const jsonData = JSON.stringify(data);
    await fs.writeFile(fileName, jsonData);
}

async function getCats() {
    const data = await readData();
    return data.cats;
}

async function getBreeds() {
    const data = await readData();
    return data.breeds;
}

async function addCats(cat) {
    const data = await readData();
    data.cats.push(cat);

    await writeData(data);
}

async function addBreed(breed) {
    const data = await readData();
    data.breeds.push(breed);

    await writeData(data);
}

module.exports = {
    getCats,
    getBreeds,
    addCats,
    addBreed,
}

