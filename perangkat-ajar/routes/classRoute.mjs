/**
 * @swagger
 * components:
 *   schemas:
 *     Classes:
 *       type: object
 *       required:
 *         - kelas
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the teacher
 *         kelas:
 *           type: string
 *           description: The teacher name
 *       example:
 *         kelas: X TOI 1
 */

/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: The teacher on school
 *
 *
 * /api/classes:
 *   get:
 *     summary: Lists all the users
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
 *
 *
 * /api/classes/{id1}/{id2}:
 *   post:
 *     summary: Create a new teacher and link to course
 *     tags: [Classes]
 *     parameters:
 *      - in: path
 *        name: id1
 *        schema:
 *          type: string
 *        required: true
 *        description: the mata pelajaran id
 *      - in: path
 *        name: id2
 *        schema:
 *          type: string
 *        required: true
 *        description: the guru id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Classes'
 *     responses:
 *       201:
 *         description: The teacher added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Classes'
 *       404:
 *         description: The course was not found
 *       500:
 *         description: Some error happened
 *
 *
 * /api/classes/{id}:
 *   get:
 *     summary: Get the teacher by id
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher id
 *     responses:
 *       200:
 *         description: The teacher response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Classes'
 *       404:
 *         description: The class was not found
 *
 *   put:
 *    summary: Update The teacher by the id
 *    tags: [Classes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The teacher id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Classes'
 *    responses:
 *      200:
 *        description: The teacher was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Classes'
 *      404:
 *        description: The teacher was not found
 *      500:
 *        description: Some error happened
 *
 *   delete:
 *     summary: Remove The teacher by id
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher id
 *     responses:
 *       200:
 *         description: The teacher was deleted
 *       404:
 *         description: The teacher was not found
 */

import express from "express";
import {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
} from "../controllers/classController.mjs";

const router = express.Router();

router.post("/:id1/:id2", createData);
router.get("/", getAllData);
router.get("/:id", getDataById);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
