const { Event, Mascot, User } = require("./setup/models");
const ctrlSignUp = require("./controllers/ctrlSignUp");
const ctrlLogin = require("./controllers/ctrlLogin");
const ctrlCalendar = require("./controllers/userID/ctrlCalendar");
const ctrlCreateWeek = require("./controllers/userID/ctrlCreateWeek");
const ctrlFocus = require("./controllers/userID/ctrlFocus");
const ctrlHome = require("./controllers/userID/ctrlHome");
const app = require("express")();
const PORT = process.env.PORT || 3500;
// const dirCurrentUser = require("./routes/userID/");
// const dirCreateWeek = require("./routes/userID/create-week/");
console.log(app);
app.get("/signup", (req, res) => ctrlSignUp.get());
app.get("/login", (req, res) => ctrlLogin.get());
app.get("/:userID/focus", (req, res) => ctrlFocus.get(userID)); //we somehow have to pass in the UserID so it knows who we're talking about?
app.get("/:userID/createWeek", (req, res) => ctrlCreateWeek.get(userID));
app.get("/:userID/calendar", (req, res) => ctrlCalendar.get(userID));
app.get("/:userID/createWeek", (req, res) => ctrlHome.get(userID));
//get: signup, login, [userid/]+[createWeek/], focus
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
