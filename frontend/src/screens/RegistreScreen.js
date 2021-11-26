import React from "react";
import FormContainer from "../components/FormContainer.js";
import { Form, Button ,Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserRegistreAction from "../redux/actionCreators/userRegistreActions.js";
 import { useHistory } from "react-router-dom";

function RegistreScreen() {
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory()
  const { error } = useSelector((state) => state.userRegistreData);
  const {user , userdata } = useSelector((state) => state.userLoginData);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(UserRegistreAction(name, email, password));
  };

  useEffect(() => {
    if (user || userdata) {
      history.push("/");
    }
    
  }, [user,dispatch]);

  return (
    <FormContainer>
     
     {error ?  <Alert variant='danger'>{error}</Alert> :  "" }    
       <Form onSubmit={submitHandler}> 
        <h1>Create new account</h1>
        <Form.Group>
          <Form.Label>Enter your Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="enter Name"
          ></Form.Control>

          <Form.Label>Enter your email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter Email"
          ></Form.Control>
          <Form.Label>Enter your password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
          ></Form.Control>
          <Form.Label>Repeat your password</Form.Label>
          <Form.Control
            type="password"
            value={passwordRepeat}
            required
            onChange={(e) => setPasswordRepeat(e.target.value)}
            placeholder="Repeat password"
          ></Form.Control>
          {password !== passwordRepeat ? (
            <p style={{ color: "red" }}>Passwords dont match</p>
          ) : (
            ""
          )}

          <Button
            disabled={password !== passwordRepeat ? true : false}
            type="submit"
            variant="success"
            className="my-4"
          >
            Create account
          </Button>
          <p>
            Already have an account <Link to="/login">Login now </Link>{" "}
          </p>
        </Form.Group>
      </Form>
    </FormContainer>
  );
}

export default RegistreScreen;
