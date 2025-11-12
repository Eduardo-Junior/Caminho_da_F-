import express from "express";

import { findPaymentMethod, createPaymentMethod, updatePaymentMethod, deletePaymentMethod } from "../controllers/paymentMethodsController.js";
import { tokenValidated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/findPaymentMethod", findPaymentMethod);
router.post("/createPaymentMethod", tokenValidated, createPaymentMethod);
router.post("/updatePaymentMethod/:id", tokenValidated, updatePaymentMethod);
router.delete("/:id", tokenValidated, deletePaymentMethod);

export default router;