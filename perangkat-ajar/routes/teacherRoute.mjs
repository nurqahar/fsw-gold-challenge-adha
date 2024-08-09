/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       required:
 *         - namaGuru
 *         - jenisKelamin
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the teacher
 *         namaGuru:
 *           type: string
 *           description: The teacher name
 *         jenisKelamin:
 *           type: string
 *           description: The sex of teacher
 *       example:
 *         namaGuru: John
 *         jenisKelamin: Laki-laki
 */

/**
 * @swagger
 * tags:
 *   name: Teacher
 *   description: The teacher on school
 *
 *
 * /api/teacher:
 *   get:
 *     summary: Lists all the users
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: The list of the teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               users:
 *                 $ref: '#/components/schemas/Teacher'
 *
 *   post:
 *     summary: Create a new teacher
 *     tags: [Teacher]
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The course id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       500:
 *         description: Some server error
 *
 *
 * /api/classes/{id}:
 *   get:
 *     summary: Get the class by id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       404:
 *         description: The class was not found
 *
 *   put:
 *    summary: Update the class by the id
 *    tags: [Class]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Class'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Class'
 *      404:
 *        description: The class was not found
 *      500:
 *        description: Some error happened
 *
 *   delete:
 *     summary: Remove the class by id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The class id
 *     responses:
 *       200:
 *         description: The class was deleted
 *       404:
 *         description: The class was not found
 */

import express from "express";
import {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
} from "../controllers/teacherController.mjs";

const router = express.Router();

router.post("/:id", createData);
router.get("/", getAllData);
router.get("/:id", getDataById);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
