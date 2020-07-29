const vesselsCtrl = {};
const Vessel = require("../models/Vessel");

const code = {
  DUPLICATED_VALUE: "11000",
};

vesselsCtrl.getVessels = async (req, res) => {
  const vessels = await Vessel.find(req.query);
  res.json(vessels);
};

vesselsCtrl.createVessel = async (req, res) => {
  const vessel = new Vessel(req.body);
  await vessel.save((err) => {
    if (err) {
      const message =
        err.code == code.DUPLICATED_VALUE
          ? `The vesselname ${err.keyValue.vesselname} is already in use`
          : `${err}`;
      res.json({ message: message });
      return console.log(message);
    }
    res.json({ message: "Vessel saved" });
  });
};

vesselsCtrl.getVessel = async (req, res) => {
  const vessel = await Vessel.findById(req.params.id);
  if (!vessel) {
    res.json({ message: "Vessel not found" });
    return console.log("Vessel not found");
  }
  res.json(vessel);
  return console.log(vessel);
};

vesselsCtrl.updateVessel = async (req, res) => {
  await Vessel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    (err, doc) => {
      if (err) {
        res.json({ message: `${err}` });
        return console.log(`${err}`);
      }
      res.json({ message: "Vessel updated" });
    }
  ).catch(() => {}); //Here i catch the promise. Async functions always return a promise.
};

vesselsCtrl.deleteVessel = async (req, res) => {
  const vessel = await Vessel.findByIdAndDelete(req.params.id);
  if (!vessel) {
    res.json({ message: "Vessel not found" });
    return console.log("Vessel not found");
  }
  res.json({ message: "Vessel deleted" });
};

module.exports = vesselsCtrl;
