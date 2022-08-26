import express from "express";
import { body } from "express-validator";

import todoController from "../../controllers/todocontroller.js";
import auth from "../../middlewares/auth.js";


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
 *           description: The auto-generated id of the todo
 *         body:
 *           type: string
 *           description: The body description
 *           required: true
 *         completed:
 *           type: boolean
 *           description: Task completed
 *       example:
 *         body: Deadlift today
 *         completed: false
 */

 /**
  * @swagger
  * tags:
  *   name: Todos
  *   description: The Todo managing API
  */
 

 /**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Returns the list of all the todos
 *     security: 
 *      - bearerAuth: []
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
 *       404:
 *         description: The todo was not found
 */
todoRoutes.get("/", auth.verifyToken, todoController.findAll);

/**
 * @swagger
 * /api/todos/{id}:
 *   get:
 *     summary: Get the todo by id
 *     security: 
 *      - bearerAuth: []
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

todoRoutes.get("/:id", auth.verifyToken, todoController.findOne);

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     security: 
 *      - bearerAuth: []
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: The todo was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Some server error
 */
 todoRoutes.post("/", auth.verifyToken, body('body').isLength({ min: 5 }), todoController.store);

/**
 * @swagger
 * /api/todos/{id}:
 *  put:
 *    summary: Update the todo by the id
 *    security: 
 *      - bearerAuth: []
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
todoRoutes.put("/:id", auth.verifyToken, todoController.update);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Remove the todo by id
 *     security: 
 *      - bearerAuth: []
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
 *       202:
 *         description: The todo was deleted
 *       404:
 *         description: The todo was not found
 */
todoRoutes.delete("/:id", auth.verifyToken, todoController.delete);

export default todoRoutes;
