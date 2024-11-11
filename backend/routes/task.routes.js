import express from "express";
import protectRoutes from "../middleware/protectRoutes.js";
import {
  createTask,
  getSingleTask,
  getUserTasks,
  updateTask,
} from "../controller/task.controller.js";

const router = express.Router();

router.post("/create", protectRoutes, createTask);
router.route("/get/:id").get(protectRoutes, getSingleTask);
router.get("/tasks", protectRoutes, getUserTasks);
router.put("/update/:id", protectRoutes, updateTask);

export default router;
