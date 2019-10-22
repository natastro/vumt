const mongoose = require('mongoose');

const db = process.env.MONGO_URI || require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.log(err));

module.exports = {
    default: "mongoose",
    mongoose: mongoose
};