import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home=()=>{
    const[items,setItems]=useState([])
    useEffect(()=>{
    console.log("From Use Effect")
     loadItems();
    },[]);
   const loadItems=async()=>{
    const result=await axios.get("http://localhost:3006/items" );
     //console.log(result);
   setItems(result.data.reverse());
}

  
const deleteItems=async id=>{
    await axios.delete(`http://localhost:3006/items/${id}`);
    loadItems();
}
    return(

        <div className="container">
            <div className="py-4">
                <h1>PRODUCT INFORMATION</h1>
<table className="table border shadow">
<thead className="table-dark">
        <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">url</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                    </tr>
    </thead>
    <tbody>
        {
          items.map((item,index)=>(
              <tr>
                  <th scope="row">{index+1}</th>
                  <td>{item.name}</td>
                  <td>{item.url}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                 <td>
                     <Link class="btn btn-primary mr-2" to={`/items/${item.id}`}>View</Link>
                     <Link class="btn btn-outline-primary mr-2" to={`/items/edit/${item.id}`}>Edit</Link>
                     <button class="btn btn-danger mr-2" onClick={()=>deleteItems(item.id)}>Delete</button>
                 </td>
                                     
              </tr>
          )
          )
}
</tbody>
</table>
            </div>
          
        </div>
    )
}
export default Home;
