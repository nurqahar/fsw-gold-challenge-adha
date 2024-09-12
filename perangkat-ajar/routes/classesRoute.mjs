/**
 * @swagger
 * components:
 *   schemas:
 *     Classes:
 *       type: object
 *       required:
 *         - class
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Class
 *         class:
 *           type: string
 *           description: The Class name
 *       example:
 *         class: X TOI 1
 */

/**
 * @swagger
 * tags:
 *   name: Class
 *   description: The Class on school
 *
 *
 * /api/classes:
 *   get:
 *     summary: Lists all the Classes
 *     tags: [Classes]
 *     responses:
 *       200:
 *         description: The list of the teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               users:
 *                 $ref: '#/components/schemas/Classes'
 *   post:
 *     summary: Create a new Class and link to Subject
 *     tags: [Class]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       201:
 *         description: The Class added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       404:
 *         description: The course was not found
 *       500:
 *         description: Some error happened
 *
 * /api/classes/{id}:
 *   get:
 *     summary: Get the Class by id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Class id
 *     responses:
 *       200:
 *         description: The Class response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       404:
 *         description: The class was not found
 *
 *   put:
 *    summary: Update The Class by the id
 *    tags: [Class]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Class id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Class'
 *    responses:
 *      200:
 *        description: The Class was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Class'
 *      404:
 *        description: The Class was not found
 *      500:
 *        description: Some error happened
 *
 *   delete:
 *     summary: Remove The Class by id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Class id
 *     responses:
 *       200:
 *         description: The Class was deleted
 *       404:
 *         description: The Class was not found
 */

import express from "express";
import {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
} from "../controllers/classesController.mjs";

const router = express.Router();

router.post("/", createData);
router.get("/", getAllData);
router.get("/:id", getDataById);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
