import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { removeProduct } from "../../redux/actionCreators/adminActions.js";
 import AddProduct from "../../components/AddProduct.js";
function ProductsTableScreen() {
const [products, setProducts] = useState([{}]);



  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLoginData);
  const columns = [
    { title: "Name", field: "name" },
    { title: "brand", field: "brand" },
    { title: "price", field: "Price" },
    { title: "quantity", field: "countInStock" },
    {
      title: "image",
      field: "image",
      render: (row) => (
        <img src={row.image} alt="" border="1" height="100" width="100" />
      ),
    },
  ];
  const config = {
    headers: {
      authorization: user.token,
      id: user._id,
    },
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products", config);
      setProducts(data);
    };
    fetchProducts();
  }, [setProducts]);
  return (
    <>
      {products ? (
        <MaterialTable
          title="Products"
          columns={columns}
          actions={[
            {
              icon: "delete",
              tooltip: "Delete article",
              onClick: (event, rowData) =>  dispatch(removeProduct(rowData._id)).then( window.location.reload(false)) 
            },
          ]}
          data={products}
        />
      ) : (
        "loading"
      )}

<AddProduct/>
     
    </>
  );
}

export default ProductsTableScreen;
