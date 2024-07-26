const db = require('sequelize');
const trabajador = require('../models').trabajador;
const programa = require('../models').programa;
module.exports = {
    create(req, res) {
        return trabajador.create({
            rut: req.body.rut,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            cargo: req.body.cargo,
            perfil: req.body.perfil
        })
            .then(newTrabajador => res.status(200).send(newTrabajador))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return trabajador.findAll()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },

    find(req, res) {
        return trabajador.findByPk(req.params.rut)
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },

    assignProgram(req, res) {
        p=programa.build(req.body.programa);
        t=trabajador.findByPk(req.body.trabajador.rut)
        .then(t => {
            t.programa_trabajador=p.id;
            t.update()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        trabajador.findByPk(req.params.rut)
            .then(result => {
                result.nombre = req.body.nombre;
                result.apellido = req.body.apellido;
                result.cargo = req.body.cargo;
                result.perfil = req.body.perfil;
                return result.save()
                    .then(exito => res.status(200).send(exito))
                    .catch(error => res.status(400).send(error));
            });
    },

    delete(req, res) {
        trabajadorTemp = trabajador.findByPk(req.params.rut)
            .then(trabajadorTemp => {
                return trabajadorTemp.destroy()
                    .then(result => res.status(200).send(result))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => {
                return res.status(400).send(error)
            })
    },
}