const mongoose = require("mongoose");

const userSchema = require("./user");
const prospectSchema = require("./prospect.js");

const User = mongoose.model("User", userSchema);
const Prospect = mongoose.model("Prospect", prospectSchema);

module.exports = {
  User,
  Prospect,
};