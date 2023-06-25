import mongoose from "mongoose";
import eventSchema from "./event.js";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: Schema.Types.ObjectId,
  username: String,
  password: String,
  displayname: String,
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "eventSchema",
    },
  ],
});
export default userSchema;
