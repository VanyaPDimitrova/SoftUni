const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configHbs } = require('./config/configHbs');
const { configExpress } = require('./config/configExpress');
const { configRouters } = require('./config/configRoutes');

start();

async function start() {
  const app = express();
  
  await configDatabase();
  configHbs();
  configExpress();
  configRouters();

  app.listen(3000, () => console.log('Server started http://localhost:3000'));
}
