import React, { useEffect, useState } from "react";
import axios from "axios";
import Showdata from './Showdata';

function Data() {

  const [users, setUsers] = useState([]);

  async function fetchUsers(){
    try{
      const response =await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
      console.log(response.data);
    }
    catch(error){
      console.log("Error:",error);
    }
  }

  useEffect(()=>{
    fetchUsers();
  },[]);


  return (

    < Showdata users={users}/>
  );
}

export default Data;