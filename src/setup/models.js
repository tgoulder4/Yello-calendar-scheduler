const mongoose = require("mongoose");
//schemas
const userSchema = require("../entities/user.js");
const eventSchema = require("../entities/event.js");
const mascotSchema = require("../entities/mascot.js");
//create models
const User = mongoose.model("User", userSchema);
const Event = mongoose.model("Event", eventSchema);
const Mascot = mongoose.model("Mascot", mascotSchema);

module.exports = { User, Event, Mascot };
