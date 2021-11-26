import express from "express"
const router = express.Router();
import { createOrder   , getOrders , getOneOrder} from "../controllers/ordersControllers.js"
import {protect , admin} from "../middlewares/authMiddleware.js"

 
router.route("/").post(  createOrder )
router.route("/:id").get(   protect , getOrders )
router.route("/order/:id").get(   protect , getOneOrder )

export default router;
