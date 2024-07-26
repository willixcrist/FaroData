const express = require('express');
const trabRouter = express.Router();
const trabajadores = require('../controllers/trabajadorController');
//seteamos las rutass
trabRouter.post("/create", trabajadores.create);
trabRouter.get("/list", trabajadores.list);
trabRouter.get("/find/:rut", trabajadores.find);
trabRouter.put("/update/:rut");
trabRouter.put("/assign", trabajadores.assignProgram);
trabRouter.delete("/delete/:rut", trabajadores.delete);
module.exports=trabRouter;