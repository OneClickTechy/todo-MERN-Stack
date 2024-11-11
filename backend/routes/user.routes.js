import express from "express";
import { getme, login, logout, register } from "../controller/user.controller.js";
import protectRoutes from "../middleware/protectRoutes.js";

const router = express.Router();

router.post("/register", register);
router.get("/login", login);
router.get("/logout", logout);
router.get("/getme", protectRoutes, getme);

export default router;
