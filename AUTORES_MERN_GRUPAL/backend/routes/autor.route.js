// *** AUTOR.ROUTE.JS ***

//Invocación al controlador de autores
const AutorController = require("../controllers/autor.controller");

//Definición de rutas
module.exports = function (app) {
  app.post("/api/autor/new", AutorController.createAutor);
  app.get("/api/autor", AutorController.getAllAutors);
  app.get("/api/autor/:id", AutorController.getAutor);
  app.put("/api/autor/:id/", AutorController.updateAutor);
  app.delete("/api/autor/:id", AutorController.deleteAutor);
};
