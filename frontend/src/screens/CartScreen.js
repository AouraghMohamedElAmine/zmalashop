import {
  Col,
  Container,
  Row,
  Alert,
  ListGroup,
  Image,
   Card ,
   Form , 
   Button
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState } from "react";
import { CartAddAction , cartRemoveItem } from "../redux/actionCreators/cartAction.js";
import { Link } from "react-router-dom";
const CartScreen = ({ match, location }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
 const {cartItems} = cart
  const productId = match.params.id;
 const qty = location.search ? parseInt(location.search.split("=")[1]) : 1;  //location search gives access to
  //==> ?key=value and then we extract the value to use it  "
  

  useEffect(() => {
    if (productId) {
      dispatch(CartAddAction(match.params.id, qty));
      }
  },[dispatch]);

  const RemoveFromCartHandler = (id)  =>{
    dispatch(cartRemoveItem(id))
  }
  const totalPrice = (cartItems) => {
    var totPrice = 0;
    for (let i = 0; i <= cartItems.length -1 ; i++) {
      totPrice += cartItems[i].price * cartItems[i].qty;
    }
    return totPrice;
  };

  return (
    <>
    {(productId && cartItems.length > 0) ?  <Alert variant='success'>added to cart successfully ! </Alert> : "" }
      <Container>
        <h1>Cart   </h1>
        <h3>{cartItems.length === 0 ? '0 items'  : "(" +cartItems.length+  ') items ' }</h3>
        {cartItems.length === 0 ? (
          <Alert variant="info">
            Your Cart is empty <Link to="/"> Go back</Link>
          </Alert>
        ) : (
          <Card variant="flush">
          <ListGroup >
            {cartItems.map((item) => {
              return (
                <ListGroup.Item id={item.product} key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} fluid rounded></Image>
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}> 
                    <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e)=>dispatch(CartAddAction(item.product , e.target.value))  }
                           >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1} pcs
                            </option>
                          ))}
                        </Form.Control>
                    
        
                    </Col>
                    <Col md={3}> 
                    <Button variant="light" onClick={()=>RemoveFromCartHandler(item.product)}>
                  <i className="fa fa-trash"  style={{color: "darkgray"}} aria-hidden="true"></i>
                  </Button>
                  
                    </Col>
                   
                  </Row>
                </ListGroup.Item>
              );
            })}

            <ListGroup.Item>
              <Row md={6}>
                <Col md={4}> <h1>total: {totalPrice(cartItems)}$</h1>  </Col>
              </Row>
              <Col md={4}><Button  ><Link to='/checkout' style={{color: "white"}}>Porceed to checkout</Link></Button></Col>

            </ListGroup.Item>
          </ListGroup>
          </Card>
        )}
      </Container>
    </>
  );
};
export default CartScreen;
