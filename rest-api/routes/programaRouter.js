const express = require('express');
progRouter=express.Router();
const programas = require('../controllers/programaController');
// rutas
progRouter.post("/create", programas.create);
progRouter.get("/list", programas.list);
progRouter.get("/find/:id", programas.find);
progRouter.put("/update/:id", programas.update);
progRouter.put("/assignDirector", programas.assignDirector);
progRouter.delete("/delete/:id", programas.delete);
module.exports=progRouter;