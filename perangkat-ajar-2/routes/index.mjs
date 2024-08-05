import express from "express";
import userRoute from "./userRoute.mjs";

const router = express.Router();

router.use("/users", userRoute);

export default router;
