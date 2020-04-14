const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({ message: "List of users" });
usersCtrl.createUser = (req, res) => res.json({ message: "Post new user" });

usersCtrl.getUser = (req, res) =>
  res.json({ message: `Get user ${req.params.id}` });
usersCtrl.updateUser = (req, res) =>
  res.json({ message: `Update user ${req.params.id}` });
usersCtrl.deleteUser = (req, res) =>
  res.json({ message: `Delete user ${req.params.id}` });

module.exports = usersCtrl;
