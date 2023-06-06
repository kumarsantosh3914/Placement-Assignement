const express = require('express');

const connect = require('./config/database');
const { PORT } = require('./config/serverConfig');

const app = express();

app.listen(4000, async () => {
    console.log('Server started');

    await connect();
    console.log(`mongo db connected`);
});