import {
  USER_REGISTRE_REQUEST,
  USER_REGISTRE_SUCCESS,
  USER_REGISTRE_FAIL,
} from "../constants/userRegistreConstants.js";

const userRegistreReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTRE_REQUEST:
      return { ...state, loading: true  };

    case USER_REGISTRE_SUCCESS:
      return {...state, loading: false, data: action.payload };

    case USER_REGISTRE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default userRegistreReducer