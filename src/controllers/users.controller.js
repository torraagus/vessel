const usersCtrl = {};
const User = require("../models/User");

const code = {
  DUPLICATED_VALUE: "11000",
};

usersCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

usersCtrl.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save((err) => {
    if (err) {
      const message =
        err.code == code.DUPLICATED_VALUE
          ? `The username ${err.keyValue.username} is already in use`
          : `${err}`;
      res.json({ message: message });
      return console.log(message);
    }
    res.json({ message: "User saved" });
  });
};

usersCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.json({ message: "User not found" });
    return console.log("User not found");
  }
  res.json(user);
  return console.log(user);
};

usersCtrl.updateUser = async (req, res) => {
  await User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    (err, doc) => {
      if (err) {
        res.json({ message: `${err}` });
        return console.log(`${err}`);
      }
      res.json({ message: "User updated" });
    }
  ).catch(() => {}); //Here i catch the promise. Async functions always return a promise.
};

usersCtrl.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    res.json({ message: "User not found" });
    return console.log("User not found");
  }
  res.json({ message: "User deleted" });
};

module.exports = usersCtrl;
