const { Router } = require("express");
const router = Router();

const {
  getVessels,
  createVessel,
  getVessel,
  updateVessel,
  deleteVessel,
} = require("../controllers/vessels.controller");

router.route("/").get(getVessels).post(createVessel);

router.route("/:id").get(getVessel).put(updateVessel).delete(deleteVessel);

module.exports = router;
