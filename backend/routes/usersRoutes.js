import express from "express"
const router = express.Router();
import { authenticateUser ,getUserProfile , createUser ,updateUser  } from "../controllers/usersControllers.js"
import protect from "../middlewares/authMiddleware.js"

router.post("/registre", createUser ) 
router.post("/login", authenticateUser) 
router.route("/profile").get( protect , getUserProfile ) 
// router.put("/updateUser/:id" , updateUser) 
router.put("/updateUser/:id" , updateUser) 

export default  router;