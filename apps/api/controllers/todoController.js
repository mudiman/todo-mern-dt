import { validationResult } from "express-validator";

import httpStatus from "../config/httpStatus.js";
import { apiResponseFormatter } from "../helpers/utils.js";
import { todoModel } from "../models/todo.js";

const todoController = {};

// Post new todo
todoController.store = async (req, res) => {
  todoModel
    .find({ body: req.body.body })
    .exec()
    .then((todo) => {
      if (todo.length >= 1) {
        return res.status(httpStatus.CONFLICT).json(apiResponseFormatter("todo Exists"));
      } else {
        todoModel.create({
          body: req.body.body,
          user: req.user.user_id
        }).then((newTodo) => {
          return res.status(httpStatus.CREATED).json(newTodo);
        });
      }
    });
};

// Get All todos
todoController.findAll = async (req, res) => {
  try {
    const todos = await todoModel.find({user: req.user.user_id}).populate('user');
    if (todos.length == 0) return res.status(httpStatus.NOT_FOUND).json(apiResponseFormatter("Todo not found"));
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
    const todo = await todoModel.findById(req.params.id).where({user: req.user.user_id});
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
    let todo = await todoModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body, updatedAt: new Date(0) },
      { new: true }
    );
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
    let todo = await todoModel.findByIdAndRemove(req.params.id);
    if (!todo) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json(apiResponseFormatter("Todo not found"));
    }
    return res.json({ message: "Todo deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};


export default todoController;
