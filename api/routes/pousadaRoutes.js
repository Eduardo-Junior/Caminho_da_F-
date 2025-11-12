import express from "express";

import { findPousadas, createPousada, deletePousada } from "../controllers/pousadaController.js";

const router = express.Router();

router.get("/findPousadas", findPousadas);
router.post("/createPousada", tokenValidated, createPousada);
router.delete("/:id", tokenValidated, deletePousada);

export default router;