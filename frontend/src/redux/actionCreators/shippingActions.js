import {
    ADD_SHIPPING_INFORMATIONS,
    REMOVE_SHIPPING_INFORMATIONS
  } from "../constants/shippingConstante.js";
  const addShippingInformations =   ( wilaya , daira , commune ,phone ) => (dispatch,getState)=> {
    
    dispatch({
        type : ADD_SHIPPING_INFORMATIONS , 
        payload : { 
            wilaya : wilaya, 
            daira : daira , 
            commune : commune ,
            phone : phone       }
    })
  localStorage.setItem("address",JSON.stringify(getState().userAddress))
  };

  const removeShippingInformations =() => (dispatch)=> {
    
    dispatch({type : REMOVE_SHIPPING_INFORMATIONS })
  }
  export { addShippingInformations , removeShippingInformations};
  