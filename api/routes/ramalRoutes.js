import express from "express";

import { findRamais, createRamal, updateRamal, deleteRamal } from "../controllers/ramalController.js";
import { tokenValidated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/findRamais", findRamais);
router.post("/createRamal", tokenValidated, createRamal);
router.post("/updateRamal/:id", tokenValidated, updateRamal);
router.delete("/:id", tokenValidated, deleteRamal);

export default router;