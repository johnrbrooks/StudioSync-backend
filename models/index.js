const mongoose = require("mongoose");

const userSchema = require("./user");
const pipelineSchema = require("./pipeline");
const prospectSchema = require("./prospect.js");
const calendarSchema = require("./calendar");
const todoSchema = require ("./todo");

const User = mongoose.model("User", userSchema);
const Pipeline = mongoose.model("Pipeline", pipelineSchema);
const Prospect = mongoose.model("Prospect", prospectSchema);
const Calendar = mongoose.model("Calendar", calendarSchema);
const Todo = mongoose.model("Todo", todoSchema)

module.exports = {
  User,
  Pipeline,
  Prospect,
  Calendar,
  Todo
};