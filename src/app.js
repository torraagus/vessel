require('dotenv').config();

const express = require('express');
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middleware

// routes

module.exports = app; 