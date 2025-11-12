import express from "express";

import { findAttributes, createAttributes, deleteAttributes } from "../controllers/attributesController.js";
import { tokenValidated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", findAttributes);
router.post("/", tokenValidated, createAttributes);
router.delete("/:id", tokenValidated, deleteAttributes);

export default router;