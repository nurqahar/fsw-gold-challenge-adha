import express from "express";
import userRoute from "./userRoute.mjs";
import classRoute from "./classRoute.mjs";
import courseRoute from "./courseRoute.mjs";
import studentRoute from "./studentRoute.mjs";
import teacherRoute from "./teacherRoute.mjs";
import teachingNotesRoute from "./teachingNotesRoute.mjs";
const router = express.Router();

router.use("/users", userRoute);
router.use("/classes", classRoute);
router.use("/course", courseRoute);
router.use("/classes/student", studentRoute);
router.use("/teaching_notes", teachingNotesRoute);
router.use("/teacher", teacherRoute);

export default router;
