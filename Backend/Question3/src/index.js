const express = require('express');

const connect = require('./config/database');
const { PORT } = require('./config/serverConfig');

const bodyParser = require('body-parser');

const apiRoutes = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', apiRoutes);

app.listen(3000, async () => {
    console.log('Server started');

    await connect();
    console.log(`mongo db connected`);
});