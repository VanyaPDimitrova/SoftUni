const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configHbs } = require('./config/configHbs');
const { configExpress } = require('./config/configExpress');
const { configRouters } = require('./config/configRoutes');

const { register } = require('./services/user');

start();

async function start() {
  const app = express();
  
  await configDatabase();
  configHbs(app);
  configExpress(app);
  configRouters();

  app.listen(3000, () => {
    console.log('Server started http://localhost:3000');

    testFunction();
  });
}

async function testFunction() {
  try {
    const result = await register('peter', '123456');

    console.log(result);
  } catch (err) {
    console.log('Caught error from index.js');
    console.log(err.message);
  }
}
