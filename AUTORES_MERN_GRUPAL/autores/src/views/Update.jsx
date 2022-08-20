import {React, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Update = () =>{
    const {id} = useParams()
    const [nameAutor,setNameAutor]=useState("");
    

    useEffect(()=>{
        axios.get("http://localhost:5000/api/autor/"+id)
        .then(res =>{
            setNameAutor(res.data.nameAutor)
            console.log(res.data.nameAutor)
        })
        .catch(err => console.log(err))
         
    },[])

    const handlerUpdateAutor = (e) =>{
        e.preventDefault()
        axios.put("http://localhost:5000/api/autor/"+id,{nameAutor})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    } 

    return(
        <div>
            <form >
            <h1> Favorite Authors</h1>
            <Link to={"/"} >Home</Link>
            <p>Add a new author:</p>
            <label> Name:</label>
            <input type="text" name="name" value={nameAutor} onChange={(e)=> setNameAutor(e.target.value)} />
            <br/>
            <button onClick={handlerUpdateAutor} > Submit </button>
            <Link to={"/"} ><button > Cancel</button></Link>
        </form>
            
        </div>
    );
}

export default Update;