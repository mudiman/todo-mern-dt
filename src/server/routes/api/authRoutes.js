import express from "express";
import { body } from "express-validator";

import authController from "../../controllers/AuthController.js";

const authRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - body
 *         - completed
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         first_name:
 *           type: string
 *           description: First name
 *         last_name:
 *           type: string
 *           description: Last name
 *         email:
 *           type: string
 *           description: Email
 *           required: true
 *         password:
 *           type: string
 *           description: password encrypted
 *           required: true
 *       example:
 *         first_name: Mudassar
 *         last_name: Ali
 *         email: mudassar.ali@gmail.com
 *         password: test
 */

 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: Authentication api
  */
 

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Create a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The user was successfully signup
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
 authRoutes.post("/signup",  body('email').isEmail(), body('password').isLength({ min: 5 }), authController.signup);

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: user login
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                 type: string
 *                 required: true
 *              password:
 *                 type: string
 *                 required: true
 *    responses:
 *      200:
 *        description: The todo was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 */
 authRoutes.post("/login", body('email').isEmail(), body('password').isLength({ min: 5 }), authController.login);



export default authRoutes;
