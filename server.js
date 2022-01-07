const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger')
const morgan = require('morgan');
const connectDB = require('./config/db')

// Route files
const bootcamps = require('./routes/bootcamps')

// load env  vars
dotenv.config({ path: './config/config.env' });

// connect db
connectDB(); 

const app = express();

// const logger = (req, res, next) => {
//     req.hello = 'Hello World';
//     console.log('Middleware run');
//     next();
// }

// dev loggin middleware
if(process.env.NODE_ENV === 'development'){
     app.use(morgan('dev'));
}



// Mount router
app.use('/api/v1/bootcamps', bootcamps)


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// handled unhandled rejection

process.on('unhandled rejection', (err, promise) => {
    console.log('unhandled rejections')
    // close server & exit process
    server.close(() => process.exit(1));
})