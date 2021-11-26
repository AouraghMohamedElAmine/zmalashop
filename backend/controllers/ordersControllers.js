import Order from "../models/orderModel.js"
import asyncHandler from "express-async-handler";

const createOrder = async ( req , res) =>  {
  console.log(req.body);
 const items  = req.body.orderItems.map((item)=>{
    return ({
            name: item.name,
            qty:   item.qty ,
            price: item.price,
            product: item.product,
            image : item.image

    })
})

const newOrder = await Order.create({
  user : req.body.user._id , 
  orderItems : items , 
  ShippingAdress: {
    wilaya: req.body.address.wilaya,
    daira: req.body.address.daira,
    commune: req.body.address.commune,
    phoneNumber: String(req.body.address.phoneNumber),
  } ,
  totalPrice  : req.body.totalPrice

})
 res.json(newOrder);
}



const getOrders = asyncHandler( async(req,res) =>{
const orders = await Order.find({user : req.params.id}) 
res.json(orders)
})


const getOneOrder = asyncHandler(  async(req,res) =>{
  const order = await Order.find({_id : req.params.id}) 
  res.json(order)
  })
export {createOrder , getOrders , getOneOrder}