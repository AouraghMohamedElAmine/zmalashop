import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productsListAction } from "../redux/actionCreators/productAction.js";
import { userLoginActions } from "../redux/actionCreators/userLoginActions.js";
import Product from "../components/Product.js";
import HomeScreenLoader from "../components/HomeScreenLoader.js";
import axios from "axios";
import Crousel from "../components/Crousel.js";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  useEffect(() => {
    dispatch(productsListAction());
  }, [dispatch]);

  return (
    <>
      {/* <Crousel /> */}
      <h1>Welcome to zmala shop </h1>
      {loading ? (
        <Row className='m-4'>
          <Col sm={12} md={6} xl={3} lg={4}>
            <HomeScreenLoader />
          </Col>
          <Col sm={12} md={6} xl={3} lg={4}>
            <HomeScreenLoader />
          </Col>
          <Col sm={12} md={6} xl={3} lg={4}>
            <HomeScreenLoader />
          </Col>
          <Col sm={12} md={6} xl={3} lg={4}>
            <HomeScreenLoader />
          </Col>
          <Col sm={12} md={6} xl={3} lg={4}>
            <HomeScreenLoader />
          </Col>
          <Col sm={12} md={6} xl={3} lg={4}>
            <HomeScreenLoader />
          </Col>
          <Col sm={12} md={6} xl={3} lg={4}>
            <HomeScreenLoader />
          </Col>
        </Row>
      ) : error ? (
        <h1>error</h1>
      ) : products ? (
        <Row>
          {products.map((product) => {
            return (
              <Col sm={12} md={6} xl={3} lg={4} key={product._id}>
                <Product
                  numReviews={product.numReviews}
                  image={product.image}
                  _id={product._id}
                  name={product.name}
                  description={product.description}
                  Price={product.Price}
                  rating={product.rating}
                />
              </Col>
            );
          })}
        </Row>
      ) : (
        ""
      )}
    </>
  );
};
export default HomeScreen;
