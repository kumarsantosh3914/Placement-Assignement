const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost/blogApi');
}

module.exports = connect;
