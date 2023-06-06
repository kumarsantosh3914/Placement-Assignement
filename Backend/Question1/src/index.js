const bodyParser = require('body-parser');
const express = require('express');
const { PORT } = require('./config/serverConfig');

const app = express();

// configuring body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/post', (req, res) => {
    const posts = [];
    for (let i = 1; i <= 20; i++) {
        posts.push({ id: i, title: `Post ${i}` });
    }

    res.json(posts);
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})