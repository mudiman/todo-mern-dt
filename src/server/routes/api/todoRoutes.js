import express from "express";
import { verifyToken } from "../../controllers/AuthController.js";
import todoController from "../../controllers/todocontroller.js";

const todoRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - body
 *         - completed
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         body:
 *           type: string
 *           description: The body description
 *         completed:
 *           type: boolean
 *           description: Task completed
 *       example:
 *         id: d5fE_asz
 *         body: Deadlift today
 *         completed: false
 */

 /**
  * @swagger
  * tags:
  *   name: Todo
  *   description: The Todo managing API
  */
 

 /**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Returns the list of all the todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: The list of the todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
todoRoutes.get("/", verifyToken, todoController.findAll);

/**
 * @swagger
 * /api/todo/{id}:
 *   get:
 *     summary: Get the todo by id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo id
 *     responses:
 *       200:
 *         description: Get todo  by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The todo was not found
 */

todoRoutes.get("/:id", verifyToken, todoController.findOne);

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: The todo was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Some server error
 */
 todoRoutes.post("/", verifyToken, todoController.store);

/**
 * @swagger
 * /api/todos/{id}:
 *  put:
 *    summary: Update the todo by the id
 *    tags: [Todos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The todo id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Todo'
 *    responses:
 *      200:
 *        description: The todo was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Todo'
 *      404:
 *        description: The todo was not found
 *      500:
 *        description: Some error happened
 */
todoRoutes.put("/:id", verifyToken, todoController.update);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Remove the todo by id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo id
 * 
 *     responses:
 *       200:
 *         description: The todo was deleted
 *       404:
 *         description: The todo was not found
 */
todoRoutes.delete("/:id", verifyToken, todoController.delete);

export default todoRoutes;
