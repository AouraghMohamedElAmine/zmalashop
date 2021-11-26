import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetailAction } from "../redux/actionCreators/productAction.js";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap";

import Rating from "../components/Rating";
import ProductLoader from "../components/ProductLoader.js";

function ProductScreen({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productDetails);
  const { loading, product, error } = data;

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}/?qty=${qty}`);
  };

  useEffect(() => {
    dispatch(productDetailAction(match.params.id));
  }, [dispatch]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go back{" "}
      </Link>
      {loading ? (
        <ProductLoader/> 
      ) : error ? (
        <h1>error</h1>
      ) : product ? (
        
        <Row>
          <Col md={6} sm={12}>
            <Image
              src={product.image}
              alt={product.name}
              variant="fluid"
            ></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  numReviews={product.numReviews}
                  rating={product.rating}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price : {product.Price} $</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col className="text-center">Price :</Col>
                    <Col className="text-center">
                      {" "}
                      <p style={{ fontWeight: "bold" }}>
                        {product.Price} $
                      </p>{" "}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col className="text-center">Status :</Col>
                    <Col className="text-center">
                      {product.countInStock >= 1 ? (
                        <p style={{ fontWeight: "bold" }}>
                          {" "}
                          {product.countInStock} In Stock
                        </p>
                      ) : (
                        <p style={{ color: "red", fontWeight: "bold" }}>
                          Sold out
                        </p>
                      )}{" "}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Row>
                    <Button
                      className="btn btn-dark"
                      disabled={product.countInStock < 1 ? true : false}
                      onClick={addToCartHandler}
                    >
                      add to Cart
                    </Button>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      ) : (
        " "
      )}
    </>
  );
}

export default ProductScreen;
