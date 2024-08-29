import { Router } from "express";
import { getOrderData } from "../controllers/orderController";

const router = Router();
router.get("/fulfillments", getOrderData);

export default router;
