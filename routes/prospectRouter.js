const express = require("express")
const Router = express.Router()
const controller = require("../controllers/prospectController")

Router.get("/get/all", controller.getAllProspects)
Router.get("/get/:id", controller.getProspectById)
Router.get("/get/userprospects/:id", controller.getUserProspects)

Router.put("/update/:id", controller.updateProspect)

Router.post("/create", controller.createProspect)

Router.post("/delete/:id", controller.deleteProspect)

module.exports = Router