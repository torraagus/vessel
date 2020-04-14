const { Router } = require("express");
const router = Router();

router
  .route("/")
  .get((req, res) => res.json({message: 'List of users'}))
  .post((req, res) => res.json({message: 'Post new user'}))

router
  .route("/:id")
  .get((req, res) => res.json({message: `Get user ${req.params.id}`}))
  .put((req, res) => res.json({message: `Update user ${req.params.id}`}))
  .delete((req, res) => res.json({message: `Delete user ${req.params.id}`}))

module.exports = router;
