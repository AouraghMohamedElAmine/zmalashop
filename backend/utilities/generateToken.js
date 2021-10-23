import jwt from "jsonwebtoken"
 const generateWebtoken = (id) =>{

    return jwt.sign({ id } , process.env.JWT_SECRET , {
        expiresIn : '30d'
    })
 }
 export default generateWebtoken