import React from "react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actionCreators/adminActions.js";
function AddProduct() {
  /* add product  form   */

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(0);
  const formRef = useRef();
  const dispatch = useDispatch()
 

  const toggleProductForm = (e) => {
    e.target.style.display = "none";
    formRef.current.style.display = "block";
  };
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addProduct(name , category , brand , description , quantity , price , image))
      .then( window.location.reload(false))
  };
   return (
    <>
      <div>
        <button onClick={toggleProductForm}>ADD NEW PRODUCT</button>
        <div
          style={{
            display: "none",
            backgroundColor: "",
            width: "50%",
            padding : "10px 10px" ,
            color : "black"
          }}
          ref={formRef}
        >
          <form onSubmit={submitHandler}>
            <div style={{ margin: "10px 10px" }}>
              <div>
              <label for="product"> Product name : </label>
              </div>
              <input
                required
                style={{width : '80%'}}
                name="product"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                value={name}
              />
            </div>

            <div style={{ margin: "10px 10px" }}>
              <div>
              <label for="description"> description : </label>
              </div>
              <input
                required
                style={{width : '80%'}}
                name="description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
                value={description}
              />
            </div>

            <div style={{ margin: "10px 10px" }}>
              <div>
              <label for="category"> Category : </label>
              </div>
              <input
                required
                style={{width : '80%'}}
                name="category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                type="text"
                value={category}
              />
            </div>

            <div style={{ margin: "10px 10px" }}>
              <div>
              <label for="price"> Price : </label>
              </div>
              <input
                required
                style={{width : '80%'}}
                name="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
                value={price}
              />
            </div>

            <div style={{ margin: "10px 10px" }}>
              <div>
                <label for="brand"> Brand  :</label>
              </div>
              <input
                required
                style={{width : '80%'}}
                name="brand"
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
                type="text"
                value={brand}
              />
            </div>

            <div style={{ margin: "10px 10px" }}>
              <div>
              <label for="quantity"> Quantity : </label>
              </div>
              <input
                required
                style={{width : '80%'}}
                name="quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                type="number"
                value={quantity}
              />
            </div>

            <div style={{ margin: "10px 10px" }}>
              <div>
              <label for="image"> image Link : </label>
              </div>
              <input
                required
                style={{width : '80%'}}
                name="image"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                type="text"
                value={image}
              />
            </div>

            <button type="submit" style={{ margin: "10px 10px" }}  > add product </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
