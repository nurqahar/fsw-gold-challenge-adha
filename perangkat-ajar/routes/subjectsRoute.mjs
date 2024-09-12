/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - subject
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Subject
 *         subject:
 *           type: string
 *           description: The Subject on your school
 *       example:
 *         subject: Sistem Kontrol Industri
 */

/**
 * @swagger
 * tags:
 *   name: Subject
 *   description: The Subject on your school
 *
 *
 * /api/subjects:
 *   get:
 *     summary: Lists all the Subject
 *     tags: [Subject]
 *     responses:
 *       200:
 *         description: The list of the courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               course:
 *                 $ref: '#/components/schemas/Subject'
 *   post:
 *     summary: Create a new Subject
 *     tags: [Subject]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *     responses:
 *       200:
 *         description: The created Subject.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       500:
 *         description: Some server error
 *
 *
 * /api/subjects/{id}:
 *   get:
 *     summary: Get The Subject by id
 *     tags: [Subject]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Subject id
 *     responses:
 *       200:
 *         description: The Subject response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       404:
 *         description: The Subject was not found
 *
 *   put:
 *    summary: Update The Subject by the id
 *    tags: [Subject]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Subject id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Subject'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Subject'
 *      404:
 *        description: The Subject was not found
 *      500:
 *        description: Some error happened
 *
 *   delete:
 *     summary: Remove The Subject by id
 *     tags: [Subject]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Subject id
 *     responses:
 *       200:
 *         description: The Subject was deleted
 *       404:
 *         description: The Subject was not found
 */

import express from "express";
import {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
} from "../controllers/subjectsController.mjs";

const router = express.Router();

router.post("/", createData);
router.get("/", getAllData);
router.get("/:id", getDataById);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
