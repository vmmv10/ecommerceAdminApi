import { Router } from "express";
import { createOrder, orderSuccess, orderFailure, orderPending, recieveWebhook } from "../controllers/paymentController.js";

const router = Router();

router.post('/payment/create-order', createOrder);
router.get('/payment/success', orderSuccess);
router.get('/payment/failure', orderFailure);
router.get('/payment/pending', orderPending);
router.post('/payment/webhook', recieveWebhook);

export default router