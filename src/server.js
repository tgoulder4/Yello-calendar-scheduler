const { Event, Mascot, User } = require("./setup/models");
const app = require("express")();
const PORT = process.env.PORT || 3500;
app.get("/", (req, res) => {
  res.send("Test");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
