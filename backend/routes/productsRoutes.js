 
import express from "express"
const router = express.Router();
import { getProducts , getOneProduct} from "../controllers/productsControllers.js"




router.get("/", getProducts);
router.get("/:id", getOneProduct);

export default router;
