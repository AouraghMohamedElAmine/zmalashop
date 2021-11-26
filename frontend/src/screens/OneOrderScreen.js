import React from 'react'
import  {useEffect , useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import MaterialTable from "material-table";
function OneOrdercreen({match}) {
  const totalPrice = (orderItems) => {
    var totPrice = 0;
    for (let i = 0; i <= orderItems.length -1 ; i++) {
      totPrice += orderItems[i].price * orderItems[i].qty;
    }
    return totPrice;
  };
  const [order, setOrder] = useState()
   const { user } = useSelector((state) => state.userLoginData);
  const columns = [
    { title: "id", field: "_id" },
    { title: "article", field: "name" },
    { title: "quantity", field: "qty" },
    { title: "unit price", field: "price"  },
    {title: "Total ",
       render: (rowData) =>{ return (`${rowData.qty * rowData.price} $ `)}
    },
    { title: "image",
      field: "image",
      render: (rowData) => (
        <img src={rowData.image} alt="" border="1" height="100" width="100" />
      ),
    },
     // { title: "shipping address", field: "shippingAddress" },
    //  {
    //   title: "is Paid",
    //   field: "isPaid",
    //   render: (rowData) =>
    //   rowData.isDelivred ? (
    //       <i
    //         style={{ color: "green" }}
    //         className="fa fa-check"
    //         aria-hidden="true"
    //       >
           
    //       </i>
    //     ) : (
    //       <i style={{ color: "#CC030E" }} className="fas fa-times-circle"></i>
    //     ),
    // },
  
  
  ];
  const config = {
    headers: {
      authorization: user.token,
      id: user._id,
    },
  };
  useEffect(() => {
    const fetchOrder = async () => {
   
      const { data } = await axios.get(`/api/orders/order/${match.params.id}`, config);
      console.log(data[0].orderItems);
      setOrder(data[0].orderItems);
    };
    fetchOrder();
  }, [setOrder]);
    return (
        <>
             {order ? (
        <MaterialTable
          title={`Order with total price ${totalPrice(order)} $`}
          columns={columns}
            // actions={[
            //   {
            //     icon:()=> 'visit',
            //     tooltip: "check order",
            //     onClick: (event, rowData) =>  history.push(`order/${rowData._id}`)
            //   },
            // ]}
          data={order}
        />
      ) : (
        "loading"
      )}
        </>
    )
}

export default OneOrdercreen
