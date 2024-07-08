import express from "express";
const router = express.Router();

// route address to a specifig HTTP method & function
// /siswa = get, add, modified siswa
// /mapel = get, add, modified mapel
// /cp = get, add, modified cp
// /tp = get, add, modified tp
// /atp = get, add, modified atp - get, post, put

router.get("/", (request, response) => {
  response.render("menuView");
});

export default router;
