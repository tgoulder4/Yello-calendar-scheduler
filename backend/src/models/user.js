const { Schema } = require("mongoose");
const userSchema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  displayname: String,
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "eventSchema",
    },
  ],
  mascot: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "mascotSchema",
  },
});
module.exports = userSchema;
