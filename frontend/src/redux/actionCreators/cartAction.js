import { CART_ADD_ITEM, CART_REMOVE_ITEM , CART_EMPTY_ITEMS} from "../constants/cartConstants.js";
import axios from "axios";

export const CartAddAction = (id, quantity) => async (dispatch , getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      price : data.Price,
      countInStock : data.countInStock,
      image: data.image,
      qty: parseInt(quantity),
    },
  });
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));

};

export const cartRemoveItem = (id) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id});
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));

};

export const emptyCart = () => async (dispatch, getState) => {
  dispatch({ type: CART_EMPTY_ITEMS});
  localStorage.removeItem('cartItems');

};
