import express from "express"
import { allUsers, searchUsers, userById } from "../controllers/profile.controller.js";

const router = express.Router();

router.get("/", allUsers)
router.get("/search", searchUsers)
router.get("/:id", userById)

export default router;