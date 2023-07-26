const mongoose = require("mongoose");

const userSchema = require("./user");
const prospectSchema = require("./prospect.js");
const calendarSchema = require("./calendar");
const todoSchema = require ("./todo");

const User = mongoose.model("User", userSchema);
const Prospect = mongoose.model("Prospect", prospectSchema);
const Calendar = mongoose.model("Calendar", calendarSchema);
const Todo = mongoose.model("Todo", todoSchema)

module.exports = {
  User,
  Prospect,
  Calendar,
  Todo
};