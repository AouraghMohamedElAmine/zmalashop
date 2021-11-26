import React, { useState , useEffect } from "react";
import { ListGroup, Card, Alert ,Button } from "react-bootstrap";
import { useSelector , useDispatch } from "react-redux";
import {emptyCart} from "../redux/actionCreators/cartAction.js"
import axios from "axios"
 function ConfirmationScreen({history}) {
  const [price, setPrice] = useState(0);
  const {cartItems} = useSelector((state) => state.cart);
  const {address} = useSelector((state) => state.userAddress);
  const { user } = useSelector((state) => state.userLoginData);
 const dispatch = useDispatch()
  const config = {
    headers: {
      authorization: user.token,
      id: user._id,
    },
  };
  const totalPrice = (cartItems) => {
    var totPrice = 0;
    for (let i = 0; i <= cartItems.length - 1; i++) {
      totPrice += cartItems[i].price * cartItems[i].qty;
    }
    setPrice(totPrice);
  };
  const confirmOrderHandler = async(cartItems,address,user) =>{
   const orderItems = cartItems
    const totalPrice = price;
     const { data } = await axios.post("/api/orders",{orderItems , address , user ,totalPrice}, config)
     dispatch(emptyCart())
    history.push("/orders")

  }
 
useEffect(() => {
   totalPrice(cartItems)
}, [])
  return (
    <>
      <Card>
        <ListGroup variant="flush">
           {cartItems.map((item)=>{
            return   <ListGroup.Item><i style={{color: "#4BBF73"}}  class="fas fa-archive"></i> {item.name} <span style={{fontWeight : "900" , color : "#4BBF73"}}>X{item.qty} units</span> </ListGroup.Item>
           })
           }
          <ListGroup.Item style={{fontWeight : "900"}}> <i style={{color: "#4BBF73"}} class="fas fa-search-location"></i> Will be shipped to  : {address.wilaya} , {address.daira} ,  {address.commune}  </ListGroup.Item>
          <ListGroup.Item style={{fontWeight : "900"}}> <i style={{color: "#4BBF73"}} class="fas fa-phone"></i> phone number  : {address.phone} </ListGroup.Item>
          <ListGroup.Item style={{fontWeight : "900"}}> <i style={{color: "#4BBF73"}} class="fas fa-dollar-sign"></i> TOTAL : {price} $ </ListGroup.Item>

        </ListGroup>
      </Card>
      <Button onClick={(e)=>confirmOrderHandler(cartItems,address,user)} variant='success' style={{margin  : "10px 10px"}}> Confirm Order </Button>

    </>
  );
}

export default ConfirmationScreen;
