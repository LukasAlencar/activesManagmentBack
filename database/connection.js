const mongoose = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const connect = () => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.sxbzvdb.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`)

    const connection = mongoose.connection;

    connection.on('error', () => {
        console.log('Error connecting to the database');
    });

    connection.on('open', () => {
        console.log('Connected to the database');
    });
}

connect();

module.exports = mongoose;