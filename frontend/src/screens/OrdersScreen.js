import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";
function OrdersScreen({ history }) {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLoginData);
  const columns = [
    { title: "id", field: "_id" },
    { title: "total Price", field: "totalPrice" },
    // { title: "shipping address", field: "shippingAddress" },
    {
      title: "is Paid",
      field: "isPaid",
      render: (row) =>
        row.isDelivred ? (
          <i
            style={{ color: "green" }}
            className="fa fa-check"
            aria-hidden="true"
          ></i>
        ) : (
          <i style={{ color: "#CC030E" }} className="fas fa-times-circle"></i>
        ),
    },
    {
      title: "is Delivred",
      field: "isDelivred",
      render: (row) =>
        row.isDelivred ? (
          <i
            style={{ color: "green" }}
            className="fa fa-check"
            aria-hidden="true"
          >
            {" "}
          </i>
        ) : (
          <i style={{ color: "#CC030E" }} className="fas fa-times-circle"></i>
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
    const fetchOrders = async () => {
      const { data } = await axios.get(`/api/orders/${user._id}`, config);
 
      setOrders(data);
    };
    fetchOrders();
  }, [setOrders]);

  return (
    <>
      {orders ? (
        <MaterialTable
          title="Orders"
          columns={columns}
          actions={[
            {
              icon: () => <i className="far fa-eye"></i>,
              tooltip: "check order",
              onClick: (event, rowData) => history.push(`order/${rowData._id}`),
            },
          ]}
          data={orders}
        />
      ) : (
        "loading"
      )}
    </>
  );
}

export default OrdersScreen;
