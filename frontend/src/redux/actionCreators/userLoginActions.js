import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userLoginConstants.js";
import {removeShippingInformations} from '../actionCreators/shippingActions.js'
import axios from "axios";
const userLoginActions = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post("/api/users/login",{ email, password },config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:  `wrong password or email password`,
    });
  }
  localStorage.setItem("user", JSON.stringify(getState().userLoginData));
};
const logoutActions = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOGOUT });
  dispatch(removeShippingInformations())
  localStorage.setItem("user", JSON.stringify(getState().userLoginData));
};

export { userLoginActions, logoutActions };
