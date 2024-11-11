import express from "express";
import protectRoutes from "../middleware/protectRoutes.js";
import { createTask, getSingleTask, getUserTasks } from "../controller/task.controller.js";

const router = express.Router();

router.post("/create", protectRoutes, createTask);
router.get("/gettasks", protectRoutes, getUserTasks);
router.route("/:id").get(protectRoutes, getSingleTask);

export default router;
