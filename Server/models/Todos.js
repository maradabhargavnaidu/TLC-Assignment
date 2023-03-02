const { Schema, model } = require("mongoose");

//Schema
const TodoSchema = new Schema({
  Id: Number,
  Title: String,
  Link: String,
  ICON_URL: String,
  Note: String,
  Date: String,
});

//Creating Collection
const Todo = model("TodoDataSet", TodoSchema);
module.exports = Todo;
