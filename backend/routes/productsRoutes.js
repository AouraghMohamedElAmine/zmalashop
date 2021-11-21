 
import express from "express"
const router = express.Router();
import { getProducts , getOneProduct , removeProduct , getBestProducts ,   addProduct} from "../controllers/productsControllers.js"
import {protect , admin} from "../middlewares/authMiddleware.js"



router.get("/", getProducts);
router.get("/best", getBestProducts);
router.route("/").post(protect ,admin, addProduct );
router.get("/:id", getOneProduct);
router.route("/:id").delete(  protect ,admin,  removeProduct)

export default router;
