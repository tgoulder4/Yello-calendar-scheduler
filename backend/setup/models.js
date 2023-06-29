const mongoose = require("mongoose");
//schemas
const userSchema = require("../models/user.js");
const eventSchema = require("../models/event.js");
const mascotSchema = require("../models/mascot.js");
//create models
const User = mongoose.model("User", userSchema);
const Event = mongoose.model("Event", eventSchema);
const Mascot = mongoose.model("Mascot", mascotSchema);

module.exports = { User, Event, Mascot };
