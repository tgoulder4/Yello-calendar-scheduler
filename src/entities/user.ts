import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: Schema.Types.ObjectId,
  username: String,
  password: String,
  displayname: String,
  events: [
    {
      id: Schema.Types.ObjectId,
      name: String,
      startTime: Date,
      description: String,
      endTime: Date,
    },
  ],
});
