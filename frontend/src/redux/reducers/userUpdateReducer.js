
import {USER_UPDATE_REQUEST , USER_UPDATE_SUCCESS ,USER_UPDATE_FAIL} from '../constants/userUpdateConstants.js'

const userUpdateReducer = (state = {} , action) =>{ 
  switch (action.type) {
      case USER_UPDATE_REQUEST:
          return {...state , loading : true }
        
      case USER_UPDATE_SUCCESS:
          return {...state , loading : false ,  updatedUser : action.payload }
        
      case USER_UPDATE_FAIL:
          return {...state , loading : false , error : "something went wrong " }
        
      default:
         return state;
  }

}
export default userUpdateReducer ; 