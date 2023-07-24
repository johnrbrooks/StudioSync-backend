const { Schema } = require('mongoose')

const prospectSchema = new Schema (
    {
        user_pipeline: { type: Schema.Types.ObjectId, ref: "Pipeline", required: true },
        contact_name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String },
        stage: { type: String, required: true },
        probability: { type: Number, required: true },
        projected_value: { type: Number, required: true },
        interested_services: [{ type: String }],
        next_follow_up: { type: String },
        notes: { type: String },
    },
    { timestamps: true }
)

module.exports = prospectSchema