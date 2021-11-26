import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY_ITEMS,
} from "../constants/cartConstants.js";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const inCart = state.cartItems.find((x) =>
        x.product === item.product ? true : false
      );

      if (inCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === item.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.product !== action.payload;
        }),
      };

    case CART_EMPTY_ITEMS:
      return { cartItems: [] };

    default:
      return state;
  }
};
