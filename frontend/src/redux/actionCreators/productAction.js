import { PRODUCT_LIST_REQUEST } from "../constants/productConstants.js";
import { PRODUCT_LIST_SUCCESS } from "../constants/productConstants.js";
import { PRODUCT_LIST_FAIL } from "../constants/productConstants.js";
import { PRODUCT_DETAILS_REQUEST } from "../constants/productConstants.js";
import { PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants.js";
import { PRODUCT_DETAILS_FAIL } from "../constants/productConstants.js";
import axios from "axios";

/* productS list action*/ 
export const productsListAction = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  const { data } = await axios.get("/api/products");


  if (data) {
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } else  {
    dispatch({ type: PRODUCT_LIST_FAIL, error: "error" });
  }
};

/* one product action */ 
export const productDetailAction = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST });
  const { data } = await axios.get(`/api/products/${id}`)


  if (data) {
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } else  {
    dispatch({ type: PRODUCT_DETAILS_FAIL, error: "error" });
  }
};
