import {
  ADD_SHIPPING_INFORMATIONS,
  REMOVE_SHIPPING_INFORMATIONS,
} from "../constants/shippingConstante";

const shippingReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SHIPPING_INFORMATIONS:
      return { ...state, address: action.payload };

    case REMOVE_SHIPPING_INFORMATIONS:
      return {};

    default:
        return state;
    }
};

export default shippingReducer