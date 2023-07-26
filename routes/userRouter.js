const express = require("express")
const Router = express.Router()
const controller = require("../controllers/userController")

Router.get("/get/all", controller.getAllUsers)
Router.get("/get/:id", controller.getUserById)
Router.post("/create", controller.createUser)

module.exports = Router;