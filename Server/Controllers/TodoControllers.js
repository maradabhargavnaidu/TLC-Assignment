const Todo = require("../models/Todos");
const Todos = require("../models/Todos");

//Getting All users from DataBase
module.exports.getAllTodos = async (req, res) => {
  try {
    const allUser = await Todos.find();
    res.send(allUser);
  } catch (error) {
    console.log(error);
  }
};

//Create a Todo in DataBase
module.exports.addTodo = async (req, res) => {
  const { Id, Title, Link, ICON_URL, Note, Date } = req.body;
  const TodoList = new Todos({
    Id,
    Title,
    Link,
    ICON_URL,
    Note,
    Date,
  });
  const Todo = await TodoList.save();
  console.log(Todo);
  res.send(Todo);
};

//Updates a Todo in DataBase
module.exports.updateTodo = async (req, res) => {
  const { _id, Title, Link, ICON_URL, Note, Date } = req.body;
  console.log(req.body);
  const Todo = await Todos.findByIdAndUpdate(_id, {
    Title,
    Link,
    ICON_URL,
    Note,
    Date,
  })
    .then(console.log("updated Successfully"))
    .catch((error) => console.log(error));
  res.send(Todo);
};

//Deletes a Todo in DataBase
module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  const Todo = await Todos.findByIdAndDelete(_id).then(
    console.log("Deleted Successfully")
  );
  res.send(Todo);
};

module.exports.getTodo = async (req, res) => {
  const { Id } = req.params;
  const Todo = await Todos.findById(Id);
  res.send(Todo);
};
