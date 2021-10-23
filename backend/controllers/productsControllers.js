 import Product from "../models/productModel.js";

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

export  { getProducts , getOneProduct } 