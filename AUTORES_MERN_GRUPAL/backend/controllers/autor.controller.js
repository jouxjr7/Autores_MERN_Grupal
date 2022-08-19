//Obtención del modelo
const Autor = require("../models/autor.model");

//Crear un autor
module.exports.createAutor = (request, response) => {
  const { nameAutor } = request.body; //Obtener las variables de la solicitud
  Autor.create({ nameAutor })
    .then((autor) =>
      response.json({ insertedAutor: autor, msg: "Successful creation" })
    )
    .catch((err) => response.status(400).json(err));
};

//Mostrar todos los autores
module.exports.getAllAutors = (_, response) => {
  Autor.find({}) //Recuperar todos los autores de la consulta
    .then((autors) => response.json(autors))
    .catch((err) => response.json(err));
};

//Mostrar un autor
module.exports.getAutor = (request, response) => {
  Autor.findOne({ _id: request.params.id }) //Recupera un autor de la consulta de acuerdo al ID ingresado en la URL
    .then((autor) => response.json(autor))
    .catch((err) => response.json(err));
};

//Actualizar un autor
module.exports.updateAutor = (request, response) => {
  Autor.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  }) //Actualiza un autor de la consulta de acuerdo al ID ingresado en la URL
    .then((updateAutor) => response.json(updateAutor))
    .catch((err) => response.json(err));
};

//Borrar un autor
module.exports.deleteAutor = (request, response) => {
  Autor.deleteOne({ _id: request.params.id })
    .then((deleteAutor) => response.json(deleteAutor))
    .catch((err) => response.json(err));
};
