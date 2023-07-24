const { Schema } = require('mongoose')

const pipelineSchema = new Schema (
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        prospects: [{ type: Schema.Types.ObjectId, ref: "Prospect" }]
    },
    {timestamps: true }
)

module.exports = pipelineSchema