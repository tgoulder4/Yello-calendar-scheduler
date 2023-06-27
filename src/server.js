const { Event, Mascot, User } = require("./setup/models");
const app = require("express")();
const ctrlIndex = require("./controllers/ctrlIndex.js");
const ctrlSignUp = require("./controllers/ctrlSignUp.js");
const ctrlCreateWeek = require("./controllers/userID/ctrlCreateWeek");
const ctrlCalendar = require("./controllers/userID/ctrlCalendar");
const ctrlCreateAvatar = require("./controllers/userID/ctrlCreateAvatar");
const PORT = process.env.PORT || 3500;
app.route("./:userID");
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

//what am i trying to do...
//set http get,post methods for each site:
// INDEX: /,
app.get("/", ctrlIndex.get()); //return index

// SIGNING UP: /sign-up,
app.get("/sign-up", ctrlSignUp.get());
app.post("/sign-up", ctrlSignUp.post());
// GET TO KNOW YOU /userid/create-week,/userid/create-avatar ,/userid/create-tasks
//            /userid/calendar
app.get("/:userid/create-week", ctrlCreateWeek.get());
app.post("/:userid/create-week", ctrlCreateWeek.post());
app.get("/:userid/create-avatar", ctrlCreateAvatar.get());
app.post("/:userid/create-avatar", ctrlCreateAvatar.post());
// HOME SCREEN & MAIN: /userid/calendar, /userid/home, /focus (JWT),
