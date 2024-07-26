const db = require('../models');
const programas = db.programa;
const trabajadores = db.trabajador;
module.exports = {
    create(req, res) {
        return programas.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return programas.findAll()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
    },
    find(req, res) {
        return programas.findByPk(req.params.id)
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        console.log(req);
        programas.findByPk(req.params.id)
            .then(tempProg => {
                tempProg.nombre = req.body.nombre;
                tempProg.descripcion = req.body.descripcion;
                return tempProg.save()
                    .then(exito => res.status(200).send(exito))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    assignDirector(req, res) {
        t = trabajadores.build(req.body.trabajador);
        p = programas.findByPk(req.body.programa.id)
        .then( p => {
            p.setCoordinador(t)
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        programas.findByPk(req.params.id)
            .then(result => {
                return result.destroy()
                    .then(exito => res.status(200).send(exito))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
}