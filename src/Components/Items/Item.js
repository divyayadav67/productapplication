import React,{useState,useEffect}from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Item =()=>{
    const [item,setItem]=useState({
        name:"",
       url :"",
        category:"",
        price:"",
    
    });
    const {id}=useParams();
    useEffect(()=>{
        loadItem();
    })
    const loadItem=async()=>{
        const res=await axios.get(`http://localhost:3006/items/${ id }`);
        //console.log(res);
        setItem(res.data);
    
    };
    return(
        <div Class="container py-4">
        <Link className="btn btn-primary" to="/">back to Home</Link>
        <h2 className="display-4">Item Id:{id}</h2>
        
        <ul className="list-group w-50">
        <li className="list-group-item"> name: {item.name} </li>
        <li className="list-group-item"> url: {item.url }</li>
        <li className="list-group-item"> category: {item.category} </li>
        <li className="list-group-item"> price: {item.price} </li>
        
        </ul>
    </div>
)
}
export default Item;
