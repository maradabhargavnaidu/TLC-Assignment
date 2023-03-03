const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const BodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const Routes = require("./Routes/TodoRouter");
require("dotenv").config();

//Middlewares
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    origin: "*",
  })
);

//Router
app.use("/", Routes);

//DATABASE CONNECTION
mongoose
  .connect(process.env.DATABASE_URL)
  .then(console.log("Database Connected Successfully"));

//Server Starting
app.listen(PORT, console.log(`Server Started at port ${PORT}`));
