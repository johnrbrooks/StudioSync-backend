const express = require("express")
const Router = express.Router()
const controller = require("../controllers/userController")

Router.get("/get/all", controller.getAllUsers)
Router.get("/get/id/:id", controller.getUserById)
Router.get("/get/username/:username", controller.getUserByUsername)

Router.post("/create", controller.createUser)

Router.put("/:id/removeProspect/:prospectId", controller.updateUserPipeline)
Router.put("/update/:id", controller.updateUser)

Router.delete("/delete/:id", controller.deleteUser)

module.exports = Router;