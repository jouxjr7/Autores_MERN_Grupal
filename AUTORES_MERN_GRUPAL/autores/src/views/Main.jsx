import React, { useState, useEffect } from "react";
import axios from "axios";
import Autores from "../components/Autores";
import Lista from "../components/Lista";

const Main = () => {
  //Declaración de variables de estado
  const [autor, setAutor] = useState([]);
  const [loaded, setLoaded] = useState(false);

  //Función para agregar elemento al DOM
  const addDom = (newAutor) => {
    setAutor([...autor, newAutor]);
  };

  //Función para actualizar el DOM
  const updateDom = (productId) => {
    setAutor(autor.filter((autor) => autor._id !== productId));
  };

  //Método para obtener y cargar información
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/autores")
      .then((res) => setAutor(res.data));
    setLoaded(true);
  }, []);

  return (
    <div>
      <Autores addDom={addDom} />
      <hr />
      {loaded && <Lista autor={autor} updateDom={updateDom} />}
      <hr />
      Hecho por: Jorge Pérez, Joseph Reyes y Alfaro
    </div>
  );
};

export default Main;
