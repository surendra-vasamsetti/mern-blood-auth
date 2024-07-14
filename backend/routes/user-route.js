import express from "express";

import { userTest } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", userTest);

export default router;
