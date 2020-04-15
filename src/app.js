const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const app = express();

const {ensureToken, verifyToken} = require('./middlewares/jwt');

// settings
app.set("port", process.env.PORT || 4000);

// middleware - Se ejecutan antes de llegar a las urls
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', ensureToken, verifyToken, require('./routes/users.routes'));
app.post('/api/login', (req, res) => {
    const user = {email: 'agu@gmail.com', password: 'password'};
    const token = jwt.sign({user}, process.env.JWT_SECRET_KEY);
    res.json({
        token
    });
});

module.exports = app; 