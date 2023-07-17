const mongoose = require("mongoose");
const event = require("./event");
const user = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  username: String,
  password: String,
  events: [
    {
      //reference the event schema
    },
  ],
});
//export user model.
