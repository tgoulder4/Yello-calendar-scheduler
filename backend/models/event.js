const mongoose = require("mongoose");
const event = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  startTime: Date,
  endTime: Date,
});
