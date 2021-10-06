import express from "express";
import todoController from "../../controllers/todocontroller.js";

const todoRoutes = express.Router();

//GetBy ID
todoRoutes.get("/:id", todoController.findOne);

//GetAll Data
todoRoutes.get("/", todoController.findAll);

//update by ID
todoRoutes.put("/:id", todoController.update);

//Save Data
todoRoutes.post("/", todoController.store);

//Delete
todoRoutes.delete("/:id", todoController.delete);

export default todoRoutes;
