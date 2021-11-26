import React from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import locationsData from "../redux/locationsData.json";
import { addShippingInformations } from "../redux/actionCreators/shippingActions";
function ShippingScreen({ history }) {
  const userAddress = useSelector((state) => state.userAddress);
  const { cartItems } = useSelector((state) => state.cart);
  const { address } = userAddress;
  const [wilaya, setWilaya] = useState(address ? address.wilaya : null);
  const [commune, setCommune] = useState(address ? address.commune : null);
  const [daira, setDaira] = useState(address ? address.daira : null);
  const [phone, setPhone] = useState(address ? address.phone : null);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const WilayaArray = [];
  WilayaArray[0] = null;

  const dairaArray = [];
  dairaArray[0] = "select daira ";

  const communeArray = [];
  communeArray[0] = "select commune";
  useEffect(() => {
    if (daira && commune && wilaya && phone) {
      dispatch(addShippingInformations(wilaya, daira, commune , phone));
    }
  }, [dispatch]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (daira && commune && wilaya && phone && (cartItems.length > 0)) {
      dispatch(addShippingInformations(wilaya, daira, commune , phone));
      console.log(wilaya, daira, commune);
      history.push("/confirmation/");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Link className="btn btn-outline-primary  my-3" to="/">
        Go back{" "}
      </Link>
      <Form onSubmit={submitHandler}>
        <h1>select your shipping informations </h1>
        <Form.Group>
          <Form.Label>Select your wilaya</Form.Label>
          <select value={wilaya} onChange={(e) => setWilaya(e.target.value)}>
            <option>Select wilaya</option>
            {locationsData.map((e) => {
              if (!WilayaArray.includes(e.wilaya_name)) {
                WilayaArray.push(e.wilaya_name);
              }
            })}
            {WilayaArray.map((w, index) => {
              if (index <= 1) {
                return null;
              }
              return <option value={w}>{w}</option>;
            })}
          </select>
          <br></br>

          <Form.Label>Select your daira</Form.Label>

          <select value={daira} onChange={(e) => setDaira(e.target.value)}>
            {locationsData.map((e) => {
              if (
                e.wilaya_name === wilaya &&
                !dairaArray.includes(e.daira_name)
              ) {
                dairaArray.push(e.daira_name);
              }
            })}

            {dairaArray.map((d, index) => {
              return (
                <option selected={daira} value={d}>
                  {d}
                </option>
              );
            })}
          </select>
          <br></br>

          <Form.Label>Selcet your commune </Form.Label>
          <select value={commune} onChange={(e) => setCommune(e.target.value)}>
            {locationsData.map((e) => {
              if (e.daira_name === daira) {
                communeArray.push(e.commune_name);
              }
            })}
            {communeArray.map((c, index) => {
              return (
                <option selected={commune} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
          <br></br>
          <Form.Label>Enter your Phone Number</Form.Label>
          <input value={phone} type='number' onChange={(e) => setPhone(e.target.value)}/>         
           <br></br>
           {error ? (
            <Alert variant="danger">
       {cartItems.length <= 0 ? "your cart is empty " : "please fill all of your information " }
            </Alert>
          ) : null}
           <Button type="submit" variant="success" classwilaya="my-4">
            porceed to payment
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default ShippingScreen;
