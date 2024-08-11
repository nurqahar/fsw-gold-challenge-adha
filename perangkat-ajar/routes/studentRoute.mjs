/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - siswa
 *         - jenis_kelamin
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the teacher
 *         siswa:
 *           type: string
 *           description: The teacher name
 *         jenis_kelamin:
 *           type: string
 *           description: The sex of teacher
 *       example:
 *         siswa: khronos
 *         jenis_kelamin: Laki-laki
 */

/**
 * @swagger
 * tags:
 *   name: Student
 *   description: The teacher on school
 *
 *
 * /api/student:
 *   get:
 *     summary: Lists all the users
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: The list of the teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               users:
 *                 $ref: '#/components/schemas/Student'
 *
 *
 * /api/student/{id}:
 *   post:
 *     summary: Create a new teacher and link to course
 *     tags: [Student]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: kelas id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: The teacher added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: The course was not found
 *       500:
 *         description: Some error happened
 *   get:
 *     summary: Get the teacher by id
 *     tags: [Student]
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
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: The class was not found
 *
 *   put:
 *    summary: Update The teacher by the id
 *    tags: [Student]
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
 *            $ref: '#/components/schemas/Student'
 *    responses:
 *      200:
 *        description: The teacher was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      404:
 *        description: The teacher was not found
 *      500:
 *        description: Some error happened
 *
 *   delete:
 *     summary: Remove The teacher by id
 *     tags: [Student]
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
} from "../controllers/studentController.mjs";

const router = express.Router();

router.post("/:id", createData);
router.get("/", getAllData);
router.get("/:id", getDataById);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
