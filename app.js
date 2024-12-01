const express = require("express");
const app = express();
const path = require("node:path");
require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// ROUTES
const indexRouter = require("./routes/index");
// const messageRouter = require("./routes/new");

// app.use("/new", messageRoutdder);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
