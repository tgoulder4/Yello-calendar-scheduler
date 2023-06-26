const { Schema } = require("mongoose");

const eventSchema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: String,
  color: String,
  priority: { type: Number, required: true }, //an error could arise here, make sure priority is discrete
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});
module.exports = eventSchema;
