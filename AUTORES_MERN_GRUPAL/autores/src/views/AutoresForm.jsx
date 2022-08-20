import React, { useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const AutoresForm = () => {
    const [nameAutor,setNameAutor]=useState("");
    

    const onSubmitHandler= e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/autor/new',{nameAutor})
            .then(res => console.log("Petición exitosa: ", res))
            .catch(err => console.log("Petición fallida:", err))
    }
    
    return(
        <form >
            <h1> Favorite Authors</h1>
            <Link to={"/"} >Home</Link>
            <p>Add a new author:</p>
            <label> Name:</label>
            <input type="text" name="name" value={nameAutor} onChange={(e)=> setNameAutor(e.target.value)} />
            <br/>
            <button onClick={onSubmitHandler} > <Link to={"/"}>Create </Link></button>
            <Link to={"/"} ><button > Cancel</button></Link>
        </form>
    );
}
export default AutoresForm;