const express = require("express");
const router = express.Router();
const Attendees = require("../models/registrationModel");

router.post("/", async (req, res) => {
  try {
    console.log({ ...req.body });
    const attendee = await Attendees.create({ ...req.body });
    res.status(200).json({ data: attendee });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res.status(400).json({ message: "Email has been used." });
    }
  }
});

module.exports = router;
