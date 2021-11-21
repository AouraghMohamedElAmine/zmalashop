 import Product from "../models/productModel.js";
 import asyncHandler from "express-async-handler";

// @desc fetch all products 
// @route GET  api/products 
// @access public
const getProducts = async ( req, res ) => {
    const products = await Product.find({});
    res.send(products);
};


// @desc fetch a single product  
// @route GET  api/products/:id
// @access public
const getOneProduct = async (req , res )=> {
    const product = await Product.findById(req.params.id);
    res.send(product);
}

// @desc remove a single product  
// @route DELETE  api/products/:id
// @access private (admin)
const removeProduct = asyncHandler(async (req,res) =>{
    const product = await Product.deleteOne({_id : req.params.id})
    res.send(product)
  })
  
// @desc add new product  
// @route post  api/products/
// @access private (admin)
const addProduct = asyncHandler(async (req,res) =>{ 
    console.log(req.body)
    const product = await Product.create({
        user  : req.body.userId,
        name : req.body.name, 
        description : req.body.description, 
        Price : req.body.price, 
        image : req.body.image, 
        brand : req.body.brand, 
        category : req.body.category, 
        countInStock : req.body.quantity, 
    })
     res.send(product)
  })
  
// @desc remove a single product  
// @route DELETE  api/products/:id
// @access private (admin)
const getBestProducts = asyncHandler(async (req,res) =>{
    const Bestproducts= await Product.find({rating : { $gte: 4 }})
    res.send(Bestproducts)
  })
export  { getProducts  , getBestProducts, getOneProduct ,removeProduct ,addProduct } 