const { User } = require('../models')
const { Prospect } = require('../models')

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

const updateUserPipeline = async (req, res) => {

  const userId = req.params.id
  const prospectId = req.params.prospectId

  try {
    const user = await User.findById(userId)
    if(!user) {
      return res.status(404).json({ message: 'User not found'})
    }

    user.pipeline = user.pipeline.filter((id) => id.toString() !== prospectId)
    await user.save()

    res.json({ message: 'Prospect removed from pipeline successfully' })
  } catch (error) {
    console.error('Error removing prospect from pipeline:', error)
    res.status(500).json({ message: 'Error removing prospect from pipeline'})
  }
}

const updateUser = async (req, res) => {

  const userId = req.params.id

  try {
    let updateUser = await User.findOneAndUpdate(
      { _id: userId },
      {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        mode: req.body.mode,
      },
      { new: true }
    )
    res.send(updateUser)
  } catch (error) {
    res.send(error)
  }
}

const deleteUser = async (req, res) => {
  const userId = req.params.id

  try {
    const user = await User.findByIdAndDelete(userId)
    if(!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json('User deleted!')
  } catch (error) {
    console.error('Error deleting user:', error)
    res.status(500).json({ message: 'Error deleting user' })
  }
  try {
    const prospects = await Prospect.deleteMany({ user_pipeline: userId })
    if(!prospects) {
      return res.status(404).json({ message: 'Prospects not found' })
    }
    res.json('Prospects deleted')
  } catch (error) {
    console.error('Error deleting prospects:', error)
    res.status(500).json({ message: 'Error deleting prospects' })
  }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    createUser,
    updateUserPipeline,
    updateUser,
    deleteUser,
}