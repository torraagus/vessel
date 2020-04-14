const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middleware - Se ejecutan antes de llegar a las urls
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users.routes'));

module.exports = app; 