import { Router } from "express";
import { getOrderData } from "../controllers/orderController";

const router = Router();
function check() {
  console.log("inside the route");
}
router.get("/fulfillments", getOrderData);

export default router;
