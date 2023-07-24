const express = require("express");
const Router = express.Router();

const UserRouter = require("./userRouter");
const PipelineRouter = require("./pipelineRouter");
const ProspectRouter = require("./prospectRouter");

Router.use("/users", UserRouter);
Router.use("/pipelines", PipelineRouter);
Router.use("/prospects", ProspectRouter);

module.exports = Router;