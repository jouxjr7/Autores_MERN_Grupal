//Importación de librerías requeridas
import React from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useState } from "react";

//Definición de clase Autores
const Autores = (props) => {
  const { addDom } = props;

  //Definición de método para controlar el envío de datos

  return (
    <div>
      <h1>Autores Favoritos</h1>
      <br />
      <Link to={"/new"} >Create Autor</Link> 
    </div>
  );
};

export default Autores;
