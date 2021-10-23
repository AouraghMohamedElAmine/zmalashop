import jwt from 'jsonwebtoken'; 
import User from '../models/userModel.js';


const protect = async (req , res , next ) =>{ 
 if(req.headers.authorization) {
   try {
    const  token = jwt.verify( req.headers.authorization , process.env.JWT_SECRET)
    req.user = token.id
    next()
   } catch (error) {
    res.send(error.message) 
   }
    
    
 }
 else{
     res.send('error')
 }
}
export default protect