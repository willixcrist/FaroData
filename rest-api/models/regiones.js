'use strict';
const {
    Model
} = require('sequelize');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
    class Regiones extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Regiones.hasMany(models.Comunas, {
                foreignKey:"id_region"
            });
        }
    }

    Regiones.init({
        id: {
            name: "id_region",
            primaryKey: true,
            allowNull: False,
        },
        nombre: DataTypes.STRING(20)
    }, {
        sequelize,
        modelName: 'Regiones',
    });
    return Regiones;
};
