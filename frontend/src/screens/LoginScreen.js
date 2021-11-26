import { Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActions } from "../redux/actionCreators/userLoginActions.js";
import FormContainer from "../components/FormContainer.js";

const LoginScreen = ( {  history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {loading , user , error } = useSelector(state => state.userLoginData)
 
   useEffect(() => {
       if(user){
           history.push('/')
       }
  }, [user])

  const submitHandler = (e) => {
      e.preventDefault()
     dispatch(userLoginActions(email, password));
  };
   return (
    <>
      <FormContainer>
           {loading ? 'loading ... ' :  "" }
          {error ?  <Alert variant='danger'>{error}</Alert> :  "" }
        <h1>Login</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Enter your email</Form.Label>
            <Form.Control
              type="text"
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
 
            <Button type="submit" variant="success" className="my-4">Login</Button>
            <p>Don't have an account <Link to='/registre'>Registre now  </Link> </p>
            </Form.Group>
        </Form>
      </FormContainer>
    </>
  );
};
export default LoginScreen;
