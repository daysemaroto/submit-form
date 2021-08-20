const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const cors = require('cors');

const routes = require('../api/routes/v1');
const { logs } = require('./vars');
// const strategies = require('./passport');

/**
* Express instance
* @public
*/
const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// gzip compression
app.use(compress());

// enable CORS - Cross Origin Resource Sharing
// app.use(cors());
app.use(cors({ origin: '*' }));

// mount api v1 routes
app.use('/v1', routes);

app.use('/public', express.static(`${process.cwd()}/public`)); // make public static

module.exports = app;
