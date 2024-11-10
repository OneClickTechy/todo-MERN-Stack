import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
  res.status(201).json({ message: "user create successfully" });
});
router.get("/login", (req, res) => {
  res.status(200).json({ message: "user login successfully" });
});
router.get("/logout", (req, res) => {
  res.status(200).json({ message: "user logout successfully" });
});

export default router;
