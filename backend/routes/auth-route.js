import express from "express";
import { authLogin, authTest } from "../controllers/auth-controller.js";

const router = express.Router();

router.post("/register", authTest);
router.post("/login", authLogin);

export default router;
