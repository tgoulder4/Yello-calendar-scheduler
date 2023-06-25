import mongoose from "mongoose";
import userSchema from "./entities/user.js";
import eventSchema from "./entities/event.js";
import mascotSchema from "./entities/mascot.js";
const User = mongoose.model("User", userSchema);
const Event = mongoose.model("Event", eventSchema);
const Mascot = mongoose.model("Mascot", mascotSchema);
const URI = "mongodb://localhost:27017/admin";
const main = async () => {
  try {
    await mongoose.connect(URI);
    const newUser = new User({
      displayname: "Tye",
      username: "tyeg",
      password: "tg",
    });
    const newEvent = new Event({
      name: "Lunch with mum",
    });
    const mascot = new Mascot({
      lastState: {
        emotion: "sad",
        reason: "ended session early",
      },
    });
    try {
      newUser.save();
      newEvent.save();
      mascot.save();
      console.log(`saved!`);
    } catch (err) {
      console.log(`error! ${err}`);
    }
  } catch (err) {
    console.error(`connection failed with error ${err}`);
  }
};
main();
