const express = require('express');
const app = express();
app.use(express.json());
const errorMiddleware = require('./middleware/error')

// Route Imports //
const product = require('./routes/productRouter')

app.use('/api/v1', product)

// Middleware for Error
app.use(errorMiddleware)

module.exports = app