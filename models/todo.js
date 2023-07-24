const { Schema } = require('mongoose')

const todoSchema = new Schema (
    {
        prospect: { type: Schema.Types.ObjectId, ref: "Prospect", required: true },
        next_follow_up: { type: String, required: true },
        to_do_details: { type: String, required: true }
    },
    {timestamps: true }
)

module.exports = todoSchema