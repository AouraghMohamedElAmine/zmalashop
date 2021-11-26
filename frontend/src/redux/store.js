import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productListReducer.js";
import { cartReducer } from "./reducers/cartReducer.js";
import { userLoginReducer } from "./reducers/userLoginReducer.js";
import userRegistreReducer from "./reducers/userRegistreReducer.js";
import userUpdateReducer from "./reducers/userUpdateReducer.js";
import shippingReducer from "./reducers/shippingReducer.js";
import {adminRemoveUserReducer} from "./reducers/adminReducer.js";
 const MiddleWare = [thunk];
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLoginData: userLoginReducer,
  userRegistreData: userRegistreReducer,
  updatedUser : userUpdateReducer,
  userAddress : shippingReducer, 
  removedUser  : adminRemoveUserReducer 
});

const cartItemsLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const UserLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};
  const AddressLocalStorage = localStorage.getItem("address") ? JSON.parse(localStorage.getItem('address')) : {}
const initalState = {
  cart: { cartItems: cartItemsLocalStorage },
  userAddress : AddressLocalStorage,
  userLoginData: UserLocalStorage,
};
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...MiddleWare))
);
export default store;
