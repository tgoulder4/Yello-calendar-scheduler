const mongoose = require("mongoose");
require("dotenv").config();
const URI =
  process.env.NODE_ENV == "production"
    ? process.env.DB_URI_PROD
    : process.env.DB_URI_DEV;
//path to current db (dev)
const connect = async () => {
  await mongoose.connect(URI);
  console.log(`Connected to ${process.env.NODE_ENV} environment!`);
};
module.exports = connect;
