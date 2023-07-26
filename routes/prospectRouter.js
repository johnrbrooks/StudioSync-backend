const express = require("express")
const Router = express.Router()
const controller = require("../controllers/prospectController")

Router.get("/get/all", controller.getAllProspects)
Router.get("/get/:id", controller.getProspectById)

module.exports = Router