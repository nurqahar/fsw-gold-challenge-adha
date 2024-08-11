/**
 * @swagger
 * components:
 *   schemas:
 *     Teaching Notes:
 *       type: object
 *       required:
 *         - presensi
 *         - materi
 *         - catatan
 *         - jam
 *         - jumlah_jp
 *         - tanggal
 *         - tahun_ajaran
 *         - semester
 *         - nilai
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the teacher
 *         presensi:
 *           type: string
 *           description: The teacher name
 *         materi:
 *           type: string
 *           description: The sex of teacher
 *         catatan:
 *           type: string
 *           description: The sex of teacher
 *         jam:
 *           type: string
 *           description: The sex of teacher
 *         jumlah_jp:
 *           type: string
 *           description: The sex of teacher
 *         tanggal:
 *           type: string
 *           description: The sex of teacher
 *         tahun_ajaran:
 *           type: string
 *           description: The sex of teacher
 *         semester:
 *           type: string
 *           description: The sex of teacher
 *         nilai:
 *           type: string
 *           description: The sex of teacher
 *       example:
 *         presensi : "HADIR"
 *         materi : "Pengenalan PLC"
 *         catatan : ""
 *         jam : "07:00"
 *         jumlah_jp : "5jp"
 *         tanggal : "22-Agustus-2024"
 *         tahun_ajaran : "2024/2025"
 *         semester : "1"
 *         nilai : ""
 *
 */

/**
 * @swagger
 * tags:
 *   name: Teaching Notes
 *   description: The teacher on school
 *
 *
 * /api/student:
 *   get:
 *     summary: Lists all the users
 *     tags: [TeachingNotes]
 *     responses:
 *       200:
 *         description: The list of the teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               users:
 *                 $ref: '#/components/schemas/TeachingNotes'
 *
 *
 * /api/student/{id}:
 *   post:
 *     summary: Create a new teacher and link to course
 *     tags: [TeachingNotes]
 *     parameters:
 *      - in: path
 *        name: id1
 *        schema:
 *          type: string
 *        required: true
 *        description: The siswa id
 *      - in: path
 *        name: id2
 *        schema:
 *          type: string
 *        required: true
 *        description: The kelas id
 *      - in: path
 *        name: id3
 *        schema:
 *          type: string
 *        required: true
 *        description: The mata pelajaran id
 *      - in: path
 *        name: id4
 *        schema:
 *          type: string
 *        required: true
 *        description: The guru id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TeachingNotes'
 *     responses:
 *       201:
 *         description: The teacher added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TeachingNotes'
 *       404:
 *         description: The course was not found
 *       500:
 *         description: Some error happened
 *   get:
 *     summary: Get the teacher by id
 *     tags: [TeachingNotes]
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
 *               $ref: '#/components/schemas/TeachingNotes'
 *       404:
 *         description: The class was not found
 *
 *   put:
 *    summary: Update The teacher by the id
 *    tags: [TeachingNotes]
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
 *            $ref: '#/components/schemas/TeachingNotes'
 *    responses:
 *      200:
 *        description: The teacher was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TeachingNotes'
 *      404:
 *        description: The teacher was not found
 *      500:
 *        description: Some error happened
 *
 *   delete:
 *     summary: Remove The teacher by id
 *     tags: [TeachingNotes]
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
} from "../controllers/teachingController.mjs";

const router = express.Router();

router.post("/:id1/:id2/:id3/:id4", createData);
router.get("/", getAllData);
router.get("/:id", getDataById);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
