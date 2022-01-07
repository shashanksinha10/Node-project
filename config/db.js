const mongoose = require('mongoose');

const conectDB = async () => {

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, 
    // err => {
    //     console.log('database conection failed')
    // }
    );
   console.log(`Mongo connected: ${conn.connection.host}`)
}

module.exports = conectDB;