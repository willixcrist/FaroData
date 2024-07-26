const usuarios = require('../models').usuario;
const diagnosticos = require('../models').diagnostico;
const programas = require('../models').programa;
const Op = require('sequelize').Op;
module.exports = {
    create(req, res) {
        usTemp = usuarios.create({
            rut: req.body.rut,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            fechaNacimiento: req.body.fechaNacimiento,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            email: req.body.email,
            diagnostico_usuario: req.body.diagnosticoId,
            programa_usuario: req.body.programaId
        })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        opciones = {}
        if (req.query)
            opciones.where = req.query
        return usuarios.findAll(opciones)
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
    },
    find(req, res) {
        return usuarios.findByPk(req.params.rut)
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(result));
    },

    update(req, res) {
        usuarios.findByPk(req.params.rut)
            .then(result => {
                result.nombres = req.body.nombres;
                result.apellidos = req.body.apellidos;
                result.fechaNacimiento = req.body.fechaNacimiento;
                result.direccion = req.body.direccion;
                result.telefono = req.bodi.telefono;
                result.email = req.body.email;
                result.diagnostico_usuario = req.body.diagnosticoId;
                result.programa_usuario = req.body.programaId;
                result.save()
                    .then(exito => res.status(200).send(exito))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        usuarios.findByPk(req.params.rut)
            .then(result => result.destroy()
                .then(exito => res.status(200).send(exito))
                .catch(error => res.status(400).send(error))
                .catch(error => res.status(400).send(error)));
    }
}