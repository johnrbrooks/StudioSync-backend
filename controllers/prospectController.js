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

const createProspect = async (req, res) => {
  try {
    let newProspect = await Prospect.create({
      user_pipeline: req.body.user_pipeline,
      contact_name: req.body.contact_name,
      email: req.body.email,
      phone: req.body.phone,
      stage: req.body.stage,
      probability: req.body.probability,
      projected_value: req.body.projected_value,
      interested_services: req.body.interested_services,
      next_follow_up: req.body.next_follow_up,
      notes: req.body.notes,
    })
    
    const prospectId = newProspect._id
    const userId = req.body.user_pipeline

    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { user_pipeline: prospectId } },
      { new: true }
    )
    
    res.send(newProspect)
  } catch (error) {
    res.send(error)
  }
}

module.exports = {
    getAllProspects,
    getProspectById,
    getUserProspects,
    createProspect
}