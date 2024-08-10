/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - mataPelajaran
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Course
 *         mataPelajaran:
 *           type: string
 *           description: The Course on your school
 *       example:
 *         mataPelajaran: Sistem Kontrol Industri
 */

/**
 * @swagger
 * tags:
 *   name: Course
 *   description: The Course on your school
 *
 *
 * /api/course:
 *   get:
 *     summary: Lists all the Course
 *     tags: [Course]
 *     responses:
 *       200:
 *         description: The list of the courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               course:
 *                 $ref: '#/components/schemas/Course'
 *   post:
 *     summary: Create a new Course
 *     tags: [Course]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: The created Course.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       500:
 *         description: Some server error
 *
 *
 * /api/course/{id}:
 *   get:
 *     summary: Get The Course by id
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Course id
 *     responses:
 *       200:
 *         description: The Course response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: The Course was not found
 *
 *   put:
 *    summary: Update The Course by the id
 *    tags: [Course]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Course id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Course'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Course'
 *      404:
 *        description: The Course was not found
 *      500:
 *        description: Some error happened
 *
 *   delete:
 *     summary: Remove The Course by id
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Course id
 *     responses:
 *       200:
 *         description: The Course was deleted
 *       404:
 *         description: The Course was not found
 */

import express from "express";
import {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
} from "../controllers/courseController.mjs";

const router = express.Router();

router.post("/", createData);
router.get("/", getAllData);
router.get("/:id", getDataById);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
