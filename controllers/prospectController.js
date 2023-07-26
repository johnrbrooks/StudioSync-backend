const { Prospect } = require('../models')
const { User } = require('../models')

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

const getUserProspects = async (req, res) => {
  try {
    console.log(req.params.id)
    let user = await User.findOne({ _id: req.params.id })
    if(user) {
      const prospects = user.pipeline
      res.json(prospects)
    } else {
      res.status(404).json({ error: 'User not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
    getAllProspects,
    getProspectById,
    getUserProspects,
}