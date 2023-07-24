const { User } = require('../models')
const { Pipeline } = require('../models')

const getAllUsers = async (req, res) => {
    try {
      let users = await User.find();
      res.json(users);
    } catch (error) {
      res.send(error);
    }
  };

module.exports = {
    getAllUsers,
}