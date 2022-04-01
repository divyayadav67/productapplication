import React, {useState,useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
const Edititem=()=>{
    let navigate =useNavigate();
    const{id}=useParams();
    const[item,setItem]=useState({
        name:"  ",
        url:" ",
        category:" ",
        price:" ",
    });
    const {name,url,category,price}=item;
    const onInputChange=e=>{
        console.log(e.target.value);
        setItem({...item,[e.target.name]:e.target.value})
    };
        useEffect(()=>{
          loadItem()
    },[])
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3006/items/${id}` ,item);
        navigate.push("/")
    }
    const loadItem=async()=>{
      
     const result= await axios.get(`http://localhost:3006/items/${id}`)
      setItem(result.data);
    }
    return(
        <div className="container">
 <Link className="btn btn-primary mt-4" to="/home" >Back to Home</Link>
 <form class="input-group mb-3 p-5" onSubmit={e=>onSubmit(e)}>
   <table class="table shadow table-borderless" >
     <thead>
       
         <tr>
           <th class="text-center fs-5 fw-" colspan="2">Edit Item Details</th>
           </tr>
           </thead>
           <tbody>
             <tr>
           <td class="text-center">Name</td>
           <td><input type="text" class="form-control" name="name" value={name} onChange={e=>onInputChange(e)} /></td>
           </tr>
           <tr>
           <td class="text-center">Url</td>
           <td><input type="text" class="form-control" name="url" value={url} onChange={e=>onInputChange(e)} /></td>
           </tr>
           <tr>
           <td class="text-center">Category</td>
           <td><input type="text" class="form-control" name="category" value={category} onChange={e=>onInputChange(e)} /></td>
           </tr>
           <tr>
           <td class="text-center">Price</td>
           <td><input type="text" class="form-control" name="price" value={price} onChange={e=>onInputChange(e)} /></td>
           </tr>
       </tbody>
   </table>
   <div class="d-grid gap-2 col-6 mx-auto">
     <button className="btn btn-center btn-primary">Update</button>
   </div>
 </form>
 </div>
    )
}
export default Edititem;