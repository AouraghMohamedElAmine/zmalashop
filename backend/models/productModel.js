import mongoose from "mongoose";
const reviewsSchema = mongoose.Schema({
    name : { type : String , required : true},
    rating : { type : Number , required : true},
    comment : { type : String , required : true},
}, { timeStamps : true})


const userSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref : "User"
  },

  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
   },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
   },
  description: {
    type: String,
    required: true,
   },
  rating: {
    type: Number,
    required: false,
    default : 0 
   },
   Reviews:  [reviewsSchema] ,
   numReviews: {
    type: Number,
    required: false,
    default : 0 
   },
   Price : {
    type: Number,
    required: true,
    default : 0 
   },
   countInStock : {
    type: Number,
    required: true,
    default : 0 
   }

});

const Product = mongoose.model("Product", userSchema);
 
export default Product;
