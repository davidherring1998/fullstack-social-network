const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const dbConnection = require("./config/connection");
const userRoutes = require("./routes/UserRoutes");

const app = express();
const PORT = process.env.PORT || 8003;
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server connected on port: ${PORT}`.cyan.underline);
  } else {
    console.log(`Server connection failed.`);
  }
});
