const express = require("express");
const {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
} = require("./../controllers/todos");

const todoRouter = express.Router();

todoRouter.get("/todos", getAllTodo);

todoRouter.get("/todo/:id", getTodoById);

todoRouter.get("/todos/completed", getCompletedTodos);

todoRouter.post("/todos", createTodo);

todoRouter.put("/todos/:id", completeTodo);

todoRouter.put("/todo/:id", updateTodo);

todoRouter.delete("/delete/:id", deleteTodo);

module.exports = todoRouter;
