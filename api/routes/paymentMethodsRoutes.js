import express from "express";

import { findPaymentMethod, createPaymentMethod, deletePaymentMethod } from "../controllers/paymentMethodsModel.js";
import { tokenValidated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/findPaymentMethod", findPaymentMethod);
router.post("/createPaymentMethod", tokenValidated, createPaymentMethod);
router.delete("/:id", tokenValidated, deletePaymentMethod);

export default router;