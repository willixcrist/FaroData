const db = require('../models');
const historicos = db.historico;
const usuarios = db.usuario;
const trabajadores = db.trabajador;
module.exports = {
    addNote(req, res) {
        return historicos.create({
            motivoCambio: req.body.motivoCambio,
            descripcionCambio: req.body.descripcionCambio,
            fecha: req.body.fecha,
            usuarios_historico: req.body.usuario.rut,
            trabajador_historico: req.body.trabajador.rut
        }).then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
    },

    moveUser(req, res) {
        let answer = {};
        const usuario = usuarios.build(req.body.usuario);
        const trabajador = trabajadores.build(req.body.trabajador);
        const programa = programas.build(req.body.programa);
        usuario.programa_usuario = programa.id;
        nota = historicos.build({
            motivoCambio: "derivación a " + programa.nombre,
            descripcionCambio: req.body.descripcionCambio,
            fecha: req.body.fecha,
            usuarios_historico: usuario.rut,
            trabajador_historico: trabajador.rut
        });
        usuario.save()
            .then(result => answer.usuario = result)
            .catch(error => res.status(400).send(error));
        nota.save()
            .then(result => answer.historico = result)
            .catch(error => res.status(400).send(error))
            .finally(() => res.status(200).send(answer));
    },

    find(req, res) {
historicos.findAll({
    where: {
        usuarios_historico: req.param.rut
    }
})
.then(result => res.status(200).send(result))
.catch(error => res.status(400).send(error));
    },

    delete(req, res) {
historico.findByPk(req.param.idHistorico)
.then(result => {
    result.destroy()
    .then(exito => res.status(200).send(exito))
    .catch(error => res.status(400).send(error));
})
.catch(error => res.status(400).send(error));
    },
}