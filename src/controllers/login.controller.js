const loginCtrl = {};

const jwt = require("jsonwebtoken");
const User = require("../models/User");

loginCtrl.loginUser = async (req, res) => {
  console.log(req.body);
  const user = await User.find(req.body);
  if (user.length > 0) {
    console.log(user);
    const token = jwt.sign({ login: user }, process.env.JWT_SECRET_KEY, { expiresIn: '30m' });
    res.json({
      token,
    });
  } else {
    console.log(`Wrong credentials`);
    res.json({
      message: `Wrong credentials`,
    });
  }
};

module.exports = loginCtrl;