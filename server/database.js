const Mongoose = require('mongoose');
const mLabDB = process.env.MONGODB_URI;
//load database
Mongoose.Promise = global.Promise;
Mongoose.connect(mLabDB, {
    useMongoClient: true,
});
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('Connection with database succeeded.');
});
exports.db = db;