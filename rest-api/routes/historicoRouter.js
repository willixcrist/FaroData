const express = require('express');
const histRouter = express.Router();
const historicos = require('../models').historico;
histRouter.post("/addNote", historicos.addNote);
histRouter.post("/moveUser", historicos.moveUser);
histRouter.get("/find", historicos.find);
histRouter.delete("/delete:idHistorico", historicos.delete);
module.exports=histRouter;