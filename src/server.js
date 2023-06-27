const { Event, Mascot, User } = require("./setup/models");
const ctrlSignUp = require("./routes/controllers/signUpController");
const app = require("express")();
const PORT = process.env.PORT || 3500;
// const dirCurrentUser = require("./routes/userID/");
// const dirCreateWeek = require("./routes/userID/create-week/");
console.log(app);
app.get("/", (req, res) => ctrlSignUp.get());
//get: signup, login, [userid/]+[createWeek/], focus
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
