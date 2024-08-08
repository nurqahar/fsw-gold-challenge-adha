import express from "express";
import userRoute from "./userRoute.mjs";

const router = express.Router();

router.use("/users", userRoute);
// router.use("/users", userRoute);
// router.use("/classes", );
// router.use("/classes/student", );
// router.use("/teaching_notes", );
// router.use("/teacher", );

export default router;
