// *** AUTOR.MODEL.JS ***

//Invocación de mongoose para hacer uso de mongo db
const mongoose = require("mongoose");

//Creación del esquema para el autor
const AutorScheme = new mongoose.Schema({
  nameAutor: {
    type: String,
    required: [true, "El nombre del autor es obligatorio"],
  },
});

//Definición del modelo
const Autor = mongoose.model("Autor", AutorScheme);
module.exports = Autor;
