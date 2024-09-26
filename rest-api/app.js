const express = require('express');
const Sequelize = require('sequelize');
const db = require('./models');
const diagRouter = require('./routes/diagnosticoRouter');
const trabRouter = require('./routes/TrabajadorRouter');
const usRouter = require('./routes/usuarioRouter');
const progRouter = require('./routes/programaRouter');
// const histRouter = require('./routes/historicoRouter');
// db.sequelize.sync({ force: true });
const logger = require('morgan');
const nodemon = require('nodemon');
const morgan = require('morgan');
//ajustamos los parámetros del server
const app = express();
//ajustamos el logger a la consola
app.use(logger('dev'));
//parsing de data en formato json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// agregamos las demás rutas
app.use("/api/diagnostico", diagRouter);
app.use("/api/trabajador", trabRouter)
app.use("/api/usuario", usRouter);
app.use("/api/programa", progRouter);
// app.use("/api/historico", histRouter);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
app.listen(port, () => {
    logger("corriendo en el puerto " + port);
    console.log("corriendo en el puerto " + port);
}
);
module.exports = app;