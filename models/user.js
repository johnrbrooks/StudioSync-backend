const { Schema } = require('mongoose')

const userSchema = new Schema (
    {
        name: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        pipeline: [{ type: Schema.Types.ObjectId, ref: "Prospect" }],
        mode: { type: Boolean }
    },
    { timestamps: true }
)

module.exports = userSchema