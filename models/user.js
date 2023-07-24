const { Schema } = require('mongoose')

const userSchema = new Schema (
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        first_name: { type: String, required: true },
        mode: { type: Boolean }
    },
    { timestamps: true }
)

module.exports = userSchema