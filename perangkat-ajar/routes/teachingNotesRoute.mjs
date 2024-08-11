/**
 * @swagger
 * components:
 *   schemas:
 *     Teaching Notes:
 *       type: object
 *       required:
 *         - presensi
 *         - materi
 *         - jam
 *         - jumlah_jp
 *         - tanggal
 *         - tahun_ajaran
 *         - semester
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Teaching Notes
 *         presensi:
 *           type: string
 *           description: The status presensi of siswa
 *         materi:
 *           type: string
 *           description: The materi of your class
 *         catatan:
 *           type: string
 *           description: The catatan of your siswa
 *         jam:
 *           type: string
 *           description: The jam of your class
 *         jumlah_jp:
 *           type: string
 *           description: The jumlah jam pelajaran of your class
 *         tanggal:
 *           type: string
 *           description: The tanggal of your class
 *         tahun_ajaran:
 *           type: string
 *           description: The tahun ajaran of your class
 *         semester:
 *           type: string
 *           description: The semester of your class
 *         nilai:
 *           type: string
 *           description: The nilai of your student
 *       example:
 *         presensi : "HADIR"
 *         materi : "Pengenalan PLC"
 *         catatan : " "
 *         jam : "07:00"
 *         jumlah_jp : "5 jp"
 *         tanggal : "22-Agustus-2024"
 *         tahun_ajaran : "2024/2025"
 *         semester : "1"
 *         nilai : " "
 *
 */

/**
 * @swagger
 * tags:
 *   name: Teaching Notes
 *   description: The Teaching Notes of your class
 *
 *
 * /api/teaching_notes:
 *   get:
 *     summary: Lists all the Teaching Notes
 *     tags: [Teaching Notes]
 *     responses:
 *       200:
 *         description: The list of the Teaching Notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               users:
 *                 $ref: '#/components/schemas/Teaching Notes'
 *
 *
 * /api/teaching_notes/{id1}/{id2}/{id3}/{id4}:
 *   post:
 *     summary: Create a Teaching Notes
 *     tags: [Teaching Notes]
 *     parameters:
 *      - in: path
 *        name: id1
 *        schema:
 *          type: string
 *        required: true
 *        description: The mata pelajaran id
 *      - in: path
 *        name: id2
 *        schema:
 *          type: string
 *        required: true
 *        description: The guru id
 *      - in: path
 *        name: id3
 *        schema:
 *          type: string
 *        required: true
 *        description: The kelas id
 *      - in: path
 *        name: id4
 *        schema:
 *          type: string
 *        required: true
 *        description: The siswa id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teaching Notes'
 *     responses:
 *       201:
 *         description: The Teaching Notes added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teaching Notes'
 *       404:
 *         description: The Teaching Notes was not found
 *       500:
 *         description: Some error happened
 *
 * /api/teaching_notes/{id}:
 *   get:
 *     summary: Get the Teaching Notes by id
 *     tags: [Teaching Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Teaching Notes id
 *     responses:
 *       200:
 *         description: The Teaching Notes response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teaching Notes'
 *       404:
 *         description: The Teaching Notes was not found
 *
 *   put:
 *    summary: Update The Teaching Notes by the id
 *    tags: [Teaching Notes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Teaching Notes id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Teaching Notes'
 *    responses:
 *      200:
 *        description: The Teaching Notes was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Teaching Notes'
 *      404:
 *        description: The Teaching Notes was not found
 *      500:
 *        description: Some error happened
 *
 *   delete:
 *     summary: Remove The Teaching Notes by id
 *     tags: [Teaching Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Teaching Notes id
 *     responses:
 *       200:
 *         description: The Teaching Notes was deleted
 *       404:
 *         description: The Teaching Notes was not found
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
