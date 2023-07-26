const { Prospect } = require('../models')

const getAllProspects = async (req, res) => {
    try {
      let prospects = await Prospect.find();
      res.json(prospects);
    } catch (error) {
      res.send(error);
    }
  };

const getProspectById = async (req, res) => {
  try {
    let prospect = await Prospect.findOne({ _id: req.params.id });
    res.json(prospect);
  } catch (error) {
    res.send(error)
  }
}

module.exports = {
    getAllProspects,
    getProspectById,
}