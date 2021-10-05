import mongoose from "mongoose"
import dotenv from "dotenv"
import users from "./users.js"
import products from "./products.js"
import Product from "./models/productModel.js"
import User from "./models/userModel.js"
import Order from "./models/orederModel.js"
import connectDb from "./config/config.js"

dotenv.config(); 
connectDb()

const importData = async () =>{
     try {
        await Order.deleteMany(); 
        await User.deleteMany(); 
        await Product.deleteMany(); 

       const createdUsers =  await User.insertMany(users);
       const adminUser = createdUsers[0]._id;

       const sampleProducts = products.map(product =>{
           return {...product , user : adminUser }
       })
       await Product.insertMany(sampleProducts)
       console.log('data imported !!!!!!!!!!!!!!!!!!!!!' );
       process.exit()
     } catch (error) {
      console.error('error'+error);
      process.exit(1)
        
     }
}


const destroyData = async () =>{
    try {
       await Order.deleteMany(); 
       await User.deleteMany(); 
       await Product.deleteMany(); 
     console.log(' data destroyed  !!!!!!!!!!!!!!!!!!!!!' );
      process.exit()
    } catch (error) {
     console.error('error'+error);
     process.exit(1)
       
    }
}
if (process.argv[2] === "-d" ){
    destroyData()
}
else{
    importData()
}