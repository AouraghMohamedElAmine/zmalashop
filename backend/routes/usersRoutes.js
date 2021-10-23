import express from "express"
const router = express.Router();
import { authenticateUser ,getUserProfile , createUser , errorHandler } from "../controllers/usersControllers.js"
import protect from "../middlewares/authMiddleware.js"

router.post("/registre", createUser , errorHandler) 
router.post("/login", authenticateUser) 
router.route("/profile").get( protect , getUserProfile ) 

export default  router;