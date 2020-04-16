const { Router } = require("express");
const router = Router();

const { loginUser } = require("../controllers/login.controller");

router.route("/").post(loginUser);

module.exports = router;
