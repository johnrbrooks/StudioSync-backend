const { User } = require('../models')
const { Calendar } = require('../models')

const getAllUsers = async (req, res) => {
    try {
      let users = await User.find();
      res.json(users);
    } catch (error) {
      res.send(error);
    }
  };

const getUserById = async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.params.id })
    res.json(user)
  } catch (error) {
    res.send(error)
  }
}

const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params
    let user = await User.findOne({ username: `${username}` })
    res.json(user)
  } catch (error) {
    res.send(error)
  }
}

const createUser = async (req, res) => {
  try {
    let newUser = await User.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      pipeline: [],
      mode: true,
    })
    res.send(newUser)
  } catch (error) {
    res.send(error)
  }

}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    createUser
}