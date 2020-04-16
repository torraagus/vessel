const loginCtrl = {};

const jwt = require("jsonwebtoken");
const Login = require("../models/Login");

loginCtrl.loginUser = (req, res) => {
  const user = new Login(req.body);
  error = user.validateSync();
  if (error) {
    console.log(`${error}`);
    res.json({
      message: `${error}`,
    });
  } else {
    // The token expires in 30 minutes  
    const token = jwt.sign({ login: user }, process.env.JWT_SECRET_KEY, { expiresIn: '30m' });
    res.json({
      token,
    });
  }
};

module.exports = loginCtrl;