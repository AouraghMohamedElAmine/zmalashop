import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../constants/userUpdateConstants.js";
import axios from "axios";
const updateUser = (id, name) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    const config = {
      headers: {
        authorization: getState().UserLoginData.user.token,
      },
    };
      const  {data} = await axios.put(`/api/users/updateUser/${id}`, {name} , config);
 
    if (data) {
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });

    }
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL });
  }
};
export default updateUser;
