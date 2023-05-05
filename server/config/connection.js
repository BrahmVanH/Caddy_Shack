const mongoose = require('mongoose');

// Pass 

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/caddyShack'
);

module.exports = mongoose.connection;
