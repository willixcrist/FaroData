const diagnosticos = require('../models').diagnostico;
const OP = require('sequelize').Op;
module.exports = {
    create(req, res) {
        return diagnosticos.create({ descripcion: req.body.descripcion })
            .then(newDiagnostico => res.status(200).send(newDiagnostico))
            .catch(error => res.status(200).send(error));
    },
    list(req, res) {
        return diagnosticos.findAll({})
            .then(diagnosticos => res.status(200).send(diagnosticos))
            .catch(error => res.status(400).send(error))
    },
    find(req, res) {
        return diagnosticos.findByPk(req.params.id)
            .then(resultado => res.status(200).send(resultado))
            .catch(error => res.status(200).send(error))
    },

    update(req, res) {
        diagnosticos.findByPk(req.params.id)
            .then(diagTemp => {
                diagTemp.descripcion = req.body.descripcion;
                return diagTemp.save()
                    .then(exito => res.status(200).send(exito))
                    .catch(error => res.status(400).send(error));
            }
            )
            .catch(error => res.status(400).send(error));
        }
,

delete(req, res){
    diagnosticos.findByPk(req.params.id)
    .then(result => {
        return result.destroy()
        .then(exito => res.status(200).send(exito))
        .then(error => res.status(400).send(error));
    });
},

test(req, res){
    console.log(req.body);
    res.status(200).send(req.body);
}
}
