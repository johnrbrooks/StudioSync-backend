const { Schema } = require('mongoose')

const calendarSchema = new Schema (
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        todos: [{ type: Schema.Types.ObjectId, ref: "Todos" }],
        days: [{ type: Object }]
    },
    { timestamps: true }
)

module.exports = calendarSchema