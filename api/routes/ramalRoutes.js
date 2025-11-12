import express from "express";

import { findRamais, createRamal, deleteRamal } from "../controllers/ramalController.js";

const router = express.Router();

router.get("/findRamais", findRamais);
router.post("/createRamal", tokenValidated, reateRamal);
router.delete("/:id", tokenValidated, deleteRamal);

export default router;