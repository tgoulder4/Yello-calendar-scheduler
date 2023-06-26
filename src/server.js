import mongoose from "mongoose";
//schemas
import userSchema from "./entities/user.js";
import eventSchema from "./entities/event.js";
import mascotSchema from "./entities/mascot.js";
//create models
const User = mongoose.model("User", userSchema);
const Event = mongoose.model("Event", eventSchema);
const Mascot = mongoose.model("Mascot", mascotSchema);
//path to current db (dev)
const URI = "mongodb://localhost:27017/admin";
