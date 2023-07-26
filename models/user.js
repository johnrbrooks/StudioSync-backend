const { Schema } = require('mongoose')

const userSchema = new Schema (
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        first_name: { type: String, required: true },
        pipeline: [{ type: Schema.Types.ObjectId, ref: "Prospect" }],
        mode: { type: Boolean }
    },
    { timestamps: true }
)

module.exports = userSchema