import express from "express";
const router = express.Router();
import { getSiswas, getSiswaByNis } from "../controllers/SiswaController.mjs";

// route address to a specifig HTTP method & function
// /siswa = get, add, modified siswa
// /mapel = get, add, modified mapel
// /cp = get, add, modified cp
// /tp = get, add, modified tp
// /atp = get, add, modified atp - get, post, put

router.get("/classes", getSiswas);
router.get("/classes/:id", getSiswaByNis);


export default router;
