import express from "express";

const router = express.Router();

router.route("/task").post(createTask)