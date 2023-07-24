const { Pipeline } = require('../models')

const getAllPipelines = async (req, res) => {
    try {
      let pipelines = await Pipeline.find();
      res.json(pipelines);
    } catch (error) {
      res.send(error);
    }
  };

module.exports = {
    getAllPipelines,
}