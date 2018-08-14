const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
});

module.exports = mongoose;