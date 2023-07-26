const express = require("express");
const Router = express.Router();

const UserRouter = require("./userRouter");
const ProspectRouter = require("./prospectRouter");

Router.use("/users", UserRouter);
Router.use("/prospects", ProspectRouter);

module.exports = Router;