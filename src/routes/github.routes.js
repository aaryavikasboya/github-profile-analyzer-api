import express from "express"
import { analyzeUser } from "../controllers/github.controller.js";

const router = express.Router();

router.get("/analyze/:username", analyzeUser);

export default router;