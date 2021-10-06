import httpStatus from "../config/httpStatus.js";
import { todoModel } from "../models/todo.js";

const todoController = {};

// Post new todo
todoController.store = async (req, res) => {
  todoModel
    .find({ name: req.body.name })
    .exec()
    .then((todo) => {
      if (todo.length >= 1) {
        return res.status(httpStatus.CONFLICT).json({
          message: "todo Exists",
        });
      } else {
        let newTodo =  todoModel.create({
          name: req.body.name,
        });
        return res.status(httpStatus.CREATED).json({ data: { newTodo } });
      }
    });
};

// Get All todos
todoController.findAll = async (req, res) => {
  try {
    const todos = await todoModel.find();
    return res.json(todos);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

// Get todo By ID
todoController.findOne = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    if (!todo) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "Todo not found" });
    }
    return res.json(todo);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

// Update todo By ID
todoController.update = async (req, res) => {
  try {
    let todo = await todoModel.findById(req.params.todoId);
    if (!todo) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "Todo not found" });
    }
    Object.assign(todo, req.body);
    await todo.save();
    return res.json(todo);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Delete todo By ID
todoController.delete = async (req, res) => {
  try {
    let todo = await todoModel.findByIdAndRemove(req.params.todoId);
    if (!todo) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "Todo not found" });
    }
    return res.json({ message: "Todo deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

export default todoController;
