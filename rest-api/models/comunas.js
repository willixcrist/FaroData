'use strict';
const {
    Model
} = require('sequelize');
const regiones = require('./regiones');
module.exports = (sequelize, DataTypes) => {
    class Comunas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Comunas.belongsTo(models.regiones, {
                foreignKey:{
                    name: "region_comuna",
                    allowNull:false,
                }
            });
        }
    }
    Comunas.init({
        id:{
            name:"id_comuna",
            primaryKey:true,
            allowNull:false,
            type: DataTypes.INTEGER(),
        },
        nombre:DataTypes.STRING(20),
    }, {
        sequelize,
        modelName: 'Comunas',
    });
    return Comunas;
};