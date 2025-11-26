const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { log } = require('console');
dotenv.config();


const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL)
        .then((con) => {
            console.log('Db connected Successfully! '+con.connection.host);
        })
        .catch((error) => { console.log(error) })
}

module.exports = connectDatabase;