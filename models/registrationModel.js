const mongoose = require("mongoose");

const registModel = new mongoose.Schema({
  fullName: String,
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: String,
  isFan: Boolean,
  isBasedInLagos: Boolean,
  hearAbout: String,
});

const attendeesModel = mongoose.model("attendees", registModel);
module.exports = attendeesModel;
