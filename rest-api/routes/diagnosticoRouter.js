const express = require("express");
const diagRouter = express.Router();
const diagnosticos = require('../controllers/diagnosticoController');
diagRouter.get('/list', diagnosticos.list);
diagRouter.get("/find/:id", diagnosticos.find);
diagRouter.post('/create', diagnosticos.create);
diagRouter.post("/test", diagnosticos.test);
diagRouter.put("/update/:id", diagnosticos.update);
diagRouter.delete("/delete/:id", diagnosticos.delete);
module.exports=diagRouter