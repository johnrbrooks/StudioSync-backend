const express = require("express");
const Router = express.Router();
const controller = require("../controllers/prospectController");

Router.get("/get/all", controller.getAllProspects);

module.exports = Router;