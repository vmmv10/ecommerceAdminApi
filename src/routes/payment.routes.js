import { Router } from "express";
import { createOrder } from "../controllers/paymentController.js";

const router = Router();

router.post('/create-order', createOrder);

export default router