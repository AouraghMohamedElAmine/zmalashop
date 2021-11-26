import {
  REMOVE_USER_FAIL,
  REMOVE_USER_REQUEST,
  REMOVE_USER_SUCCESS,
  REMOVE_PRODUCT_REQUEST,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL
} from "../constants/adminConstants";
import axios from "axios";
import  mongoose from "mongoose";
 

export const removeUser = (id) => async (dispatch)=>{
   const {user} = JSON.parse(localStorage.getItem("user"))
  const config = {
    headers : {
      authorization :user.token ,
      id : user._id
    }
  }
  try {
    dispatch({type :REMOVE_USER_REQUEST })
    const deltedUser = await axios.delete(`/api/users/${id}` , config);

    dispatch({type : REMOVE_USER_SUCCESS , payload : deltedUser})
  } catch (error) {
    
    dispatch({type : REMOVE_USER_FAIL , payload :  "user not found " })
  }
}

export const removeProduct = (id) => async (dispatch)=>{
   const {user} = JSON.parse(localStorage.getItem("user"))
  const config = {
    headers : {
      authorization :user.token ,
      id : user._id
    }
  }
  try {
    dispatch({type :REMOVE_PRODUCT_REQUEST })
    const deletedProduct = await axios.delete(`/api/products/${id}` , config);
    dispatch({type : REMOVE_PRODUCT_SUCCESS , payload : deletedProduct})
  } catch (error) {
    dispatch({type : REMOVE_PRODUCT_FAIL , payload :  "Product not found " })
  }
}

export const addProduct = (  name , category , brand , description , quantity , price , image) => async (dispatch)=>{
   const {user} = JSON.parse(localStorage.getItem("user"))
   let userId = user._id
  const config = {
    headers : {
      authorization :user.token ,
      id : user._id
    }
  }

  try {
    dispatch({type :ADD_PRODUCT_REQUEST })
    // userId = mongoose.Types.ObjectId(userId);
    const newProduct = await axios.post(`/api/products/`,{ userId ,  name , category , brand , description , quantity , price , image} , config);
    dispatch({type : ADD_PRODUCT_SUCCESS , payload : newProduct})
  } catch (error) {
    dispatch({type : ADD_PRODUCT_FAIL , payload :  "something happned  " })
  }
}