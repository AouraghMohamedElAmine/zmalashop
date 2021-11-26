import {
    REMOVE_USER_FAIL,
    REMOVE_USER_REQUEST,
    REMOVE_USER_SUCCESS,
    REMOVE_PRODUCT_REQUEST,
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_FAIL,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL
  } from "../constants/adminConstants";
 
  const adminRemoveUserReducer = (state = {} ,  action ) =>{
    switch (action.type) {
        case REMOVE_USER_REQUEST:
            return {...state , loading : true }
        case REMOVE_USER_SUCCESS:
            return {...state , loading : false , deletedUsers : action.payload }
        case REMOVE_USER_FAIL:
            return {...state , loading : false , error : action.payload }
      default : 
      return state
      
    }
}

const adminRemoveProductReducer = (state = {} ,  action ) =>{
    switch (action.type) {
        case REMOVE_PRODUCT_REQUEST:
            return {...state , loading : true }
        case REMOVE_PRODUCT_SUCCESS:
            return {...state , loading : false , deletedProduct : action.payload }
        case REMOVE_PRODUCT_FAIL:
            return {...state , loading : false , error : action.payload }
      default : 
      return state
      
    }

}

const adminAddProductReducer = (state = {} ,  action ) =>{
    switch (action.type) {
        case ADD_PRODUCT_REQUEST:
            return {...state , loading : true }
        case ADD_PRODUCT_SUCCESS:
            return {...state , loading : false , newProduct : action.payload }
        case ADD_PRODUCT_FAIL:
            return {...state , loading : false , error : action.payload }
      default : 
      return state
      
    }
}
export {adminRemoveUserReducer  ,adminRemoveProductReducer ,adminAddProductReducer }