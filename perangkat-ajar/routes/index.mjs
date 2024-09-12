import express from "express";
import userRoute from "./userRoute.mjs";
import classRoute from "./classesRoute.mjs";
import courseRoute from "./subjectRoute.mjs";
import studentRoute from "./studentsRoute.mjs";
import teachingNotesRoute from "./teachingNotesRoute.mjs";
import teacherRoute from "./teachersRoute.mjs";
const router = express.Router();

router.use("/users", userRoute);
router.use("/classes", classRoute);
router.use("/course", courseRoute);
router.use("/student", studentRoute);
router.use("/teaching_notes", teachingNotesRoute);
router.use("/teacher", teacherRoute);

export default router;
