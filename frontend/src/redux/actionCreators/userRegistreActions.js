import {
    USER_REGISTRE_REQUEST,
    USER_REGISTRE_SUCCESS,
    USER_REGISTRE_FAIL,
  } from "../constants/userRegistreConstants.js";
  import axios from "axios"
  import { userLoginActions } from '../actionCreators/userLoginActions.js'
  const UserRegistreAction =  (name , email , password ) =>  async(dispatch , getState) => { 
    try {
        dispatch({ type: USER_REGISTRE_REQUEST });
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
    
        const { data } = await axios.post('/api/users/registre',{ name , password ,email },config)
        dispatch({
          type: USER_REGISTRE_SUCCESS,
          payload: data,
        });
        dispatch(userLoginActions(email , password))
      } catch (error) {
        dispatch({
          type: USER_REGISTRE_FAIL,
          payload: 'email already used'       
         });
      }
      localStorage.setItem('user',JSON.stringify(getState().userRegistreData));
}
export default UserRegistreAction