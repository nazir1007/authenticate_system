//------require the Library--------//
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// ------ Set up default mongoose connection -------- //
let mongoDB = process.env.MONGODB_URI || "mongodb://localhost/user_authentication";

//------Connect to Mongo--------//
mongoose.connect(mongoDB);

//------acquire the connection (to check if it is successful)--------//
const db = mongoose.connection;

db.on('error',  console.error.bind(console, 'error connecting to db'));

//------ up and running then print the message --------//
db.once('open', () => {
    console.log('Successfully connected to the database');

})