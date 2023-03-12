const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const path = require("path");

require("dotenv").config();
const app = express();

//Connection to Database
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(`Database connection failed because of ${err}`);
  });

app.use(express.static("assets"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
