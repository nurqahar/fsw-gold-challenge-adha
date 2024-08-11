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
 *           description: The auto-generated id of the Classes
 *         kelas:
 *           type: string
 *           description: The Classes name
 *       example:
 *         kelas: X TOI 1
 */

/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: The Classes on school
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
 *     summary: Create a new Classes and link to course
 *     tags: [Classes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Classes'
 *     responses:
 *       201:
 *         description: The Classes added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Classes'
 *       404:
 *         description: The course was not found
 *       500:
 *         description: Some error happened
 *
 * /api/classes/{id}:
 *   get:
 *     summary: Get the Classes by id
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Classes id
 *     responses:
 *       200:
 *         description: The Classes response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Classes'
 *       404:
 *         description: The class was not found
 *
 *   put:
 *    summary: Update The Classes by the id
 *    tags: [Classes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Classes id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Classes'
 *    responses:
 *      200:
 *        description: The Classes was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Classes'
 *      404:
 *        description: The Classes was not found
 *      500:
 *        description: Some error happened
 *
 *   delete:
 *     summary: Remove The Classes by id
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Classes id
 *     responses:
 *       200:
 *         description: The Classes was deleted
 *       404:
 *         description: The Classes was not found
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

router.post("/", createData);
router.get("/", getAllData);
router.get("/:id", getDataById);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
