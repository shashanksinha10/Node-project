const logger = (req, res, next) => {
    req.hello = 'Hello World';
    console.log('Middleware run');
    next();
}

// app.use(logger);

module.exports = logger;