import React from "react";
import {useDispatch ,useSelector } from "react-redux";
import { useEffect , useState } from "react";
import MaterialTable from 'material-table'
import axios from "axios";
 import {removeUser} from "../../redux/actionCreators/adminActions.js"

function UsersTableScreen() {
  const [users, setUsers] = useState([{}]);
  const dispatch = useDispatch()
   const {user} = useSelector(state => state.userLoginData)
const columns = [
    {title:'Name' , field : 'name'},
    {title:'Email' , field : 'email'},
    {title:'isAdmin' , field : 'isAdmin'},
 ]
const config = {
  headers : {
    authorization :user.token ,
    id : user._id
  }
}
useEffect(() => {
    const fetchUsers = async () =>{ 
        const {data} = await axios.get('/api/users/getUsers', config)
        setUsers(data)     
        
     }
    fetchUsers()
 }, [setUsers])
  return (
    <>
       {users ?
       < MaterialTable
        title="users" columns={columns}    actions={[
          {
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) =>  
           dispatch(removeUser(rowData._id)).then( window.location.reload(false))
           
           }
        ]}  data={users}  /> 
        
        : 'loading'}
     </>
  );
}

export default UsersTableScreen;
