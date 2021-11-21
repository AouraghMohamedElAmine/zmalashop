import express from "express"
const router = express.Router();
import { authenticateUser ,getUserProfile , createUser ,updateUser , getAllUsers , removeUser} from "../controllers/usersControllers.js"
import {protect , admin} from "../middlewares/authMiddleware.js"

router.post("/registre", createUser ) 
router.post("/login", authenticateUser) 
router.route("/profile").get( protect , getUserProfile ) 
router.put("/updateUser/:id",updateUser) 
router.route("/getUsers").get(  protect ,admin,  getAllUsers)
router.route("/:id").delete(  protect ,admin,  removeUser)


export default  router;