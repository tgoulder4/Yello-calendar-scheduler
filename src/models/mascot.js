const { Schema } = require("mongoose");

const mascotSchema = new Schema({
  id: Schema.Types.ObjectId,
  lastState: {
    emotion: String,
    reason: String,
  },
});
module.exports = mascotSchema;
