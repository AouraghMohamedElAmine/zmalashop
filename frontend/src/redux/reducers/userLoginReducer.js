import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
 USER_LOGOUT } 
 from "../constants/userLoginConstants.js";

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };

    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload  };

    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };

      case USER_LOGOUT:
      return {};

    default: 
    return state
    
  }
};

 export {userLoginReducer}