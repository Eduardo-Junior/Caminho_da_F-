import express from "express";

import { findAtributos, createAtributos, deleteAtributo } from "../controllers/atributosController.";

const router = express.Router();

router.get("/", findAtributos);
router.post("/", tokenValidated, createAtributos);
router.delete("/:id", tokenValidated, deleteAtributo);

export default router;