import mongoose from "mongoose";
const { Schema } = mongoose;

const mascotSchema = new Schema({
  id: Schema.Types.ObjectId,
  lastState: {
    emotion: String,
    reason: String,
  },
});
export default mascotSchema;
