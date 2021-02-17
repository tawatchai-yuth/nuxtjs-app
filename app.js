var express = require('express');
var app = express();
const morgan = require('morgan');

const postRoutes = require('./v1/api/post');

app.use(morgan('dev'));

// Routes which should handle requests
app.use('/', postRoutes);
app.use('/v1/api/post', postRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;