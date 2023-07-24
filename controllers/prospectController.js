const { Prospect } = require('../models')

const getAllProspects = async (req, res) => {
    try {
      let prospects = await Prospect.find();
      res.json(prospects);
    } catch (error) {
      res.send(error);
    }
  };

module.exports = {
    getAllProspects,
}