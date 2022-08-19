//Importación de librerías requeridas
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../styles/Lista.css";

//Definición de clase Lista
const Lista = (props) => {
  const { autor, updateDom } = props;

  //Método para borrar un autor basado en su id
  const deleteAutor = (autorID) => {
    axios
      .delete("http://localhost:5000/api/autor/" + autorID)
      .then((res) => updateDom(autorID))
      .catch((err) => console.log("Error: ", err));
  };
  //Método para editar un autor basado en su id
  const updateAutor = (autorID) => {
    axios
      .put("http://localhost:5000/api/autor/" + autorID)
      .then((res) => updateDom(autorID))
      .catch((err) => console.log("Error: ", err));
  };

  //Estructura html para mostrar la lista de autores en pantalla
  return (
    <div>
      <div>
        <h1>Lista de autores favoritos:</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Autor</th>
            <th>Acciones disponibles</th>
          </tr>
        </thead>
        <tbody>
          {autor.map((autor, idx) => {
            return (
              <tr key={idx + 2}>
                <td key={idx}>
                  <p className='lst' key={idx}>
                    <Link to={"/" + autor._id}>{autor.nameAutor}</Link>
                  </p>
                </td>
                <td>
                  <button
                    key={idx + 1}
                    className='btnDel'
                    onClick={(e) => deleteAutor(autor._id)}
                  >
                    Eliminar
                  </button>
                  <button
                    key={idx + 1}
                    className='btnUpdate'
                    onClick={(e) => updateAutor(autor._id)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Lista;
