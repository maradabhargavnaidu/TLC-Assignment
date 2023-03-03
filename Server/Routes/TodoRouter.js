const { Router } = require("express");
const router = Router();
const {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  getTodo,
} = require("../Controllers/TodoControllers");

//API
router.get("/getalltodos", getAllTodos);
//Post
router.post("/addtodo", addTodo);
//update
router.post("/updatetodo", updateTodo);
//delete
router.delete("/addtodo", deleteTodo);
//params
router.get("/getTodo/:Id", getTodo);

module.exports = router;
