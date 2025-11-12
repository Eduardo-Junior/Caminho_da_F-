import express from "express";

import { findPousadas, createPousada, updatePousada, deletePousada } from "../controllers/pousadaController.js";
import { tokenValidated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/findPousadas", findPousadas);
router.post("/createPousada", tokenValidated, createPousada);
router.post("/updatePousada/:id", tokenValidated, updatePousada);
router.delete("/:id", tokenValidated, deletePousada);

export default router;