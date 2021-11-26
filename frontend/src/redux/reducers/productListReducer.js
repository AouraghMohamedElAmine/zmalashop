import { PRODUCT_LIST_REQUEST } from "../constants/productConstants.js";
import { PRODUCT_LIST_SUCCESS } from "../constants/productConstants.js";
import { PRODUCT_LIST_FAIL } from "../constants/productConstants.js";
import { PRODUCT_DETAILS_REQUEST } from "../constants/productConstants.js";
import { PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants.js";
import { PRODUCT_DETAILS_FAIL } from "../constants/productConstants.js";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.error };

    default:
      return { products: [] };
  }
};
 
export const productDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, };

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.error };

    default:
      return {};
  }
};
