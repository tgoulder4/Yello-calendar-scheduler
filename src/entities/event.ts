import mongoose from "mongoose";
const { Schema } = mongoose;

const eventSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  description: String,
  color: String,
  priority: Number, //an error could arise here, make sure priority is discrete
  userID: Schema.Types.ObjectId,
  startTime: Date,
  endTime: Date,
});
export default eventSchema;
