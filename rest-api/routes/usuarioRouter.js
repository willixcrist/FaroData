const express = require('express');
const usRouter = express.Router();
const usuarios = require('../controllers/usuarioController');
//rutas
usRouter.post("/create", usuarios.create);
usRouter.get("/list", usuarios.list);
usRouter.get("/find", usuarios.find);
usRouter.put("/update", usuarios.update);
usRouter.delete("/delete", usuarios.delete);
module.exports = usRouter;