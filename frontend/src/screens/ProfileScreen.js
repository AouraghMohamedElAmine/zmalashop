import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "react-bootstrap";
import updateUser from "../redux/actionCreators/userUpdateActions";
function ProfileScreen({ history }) {
  const userData = useSelector((state) => state.userLoginData);
  const dispatch = useDispatch();
  const { user } = userData;
  const [message, setMessage] = useState(null);
  const [newName, setNewName] = useState(user ? user.name : null);

    useEffect(() => {
      if(!newName){
  history.push("/")
      }
    }, [])

  const editHandler = (e) => {
    const input = document.getElementsByClassName(
      e.target.className.toString()
    )[0];
    input.disabled = false;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (user.name !== newName) {
      dispatch(updateUser(user._id, newName));
      setMessage(null);
      history.push("/");
    } else {
      setMessage('no changes on "name"');
    }
  };

  return (
    <>
      <div>
        <form>
          <h2>Profile</h2>

          <div>
            <label>name :</label>
            <input
              onChange={(e) => setNewName(e.target.value)}
              className="name"
              type="text"
              value={newName}
              disabled
            /> 
            <span style={{cursor : "pointer" , marginLeft : '5px'}} className="name" onClick={editHandler}>
              edit
            </span>
            {message ? <Alert variant="danger"> {message} </Alert> : null}
          </div>

          <input onClick={submitHandler} type="submit" value="update" />
        </form>
      </div>
    </>
  );
}

export default ProfileScreen;
