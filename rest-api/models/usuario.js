'use strict';
const {
    Model
} = require('sequelize');
const programa = require('./programa');
module.exports = (sequelize, DataTypes) => {
    class usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            usuario.belongsTo(models.diagnostico, {
                onDelete: "cascade",
                onUpdate: "null",
                foreignKey: {
                    name: "diagnostico_usuario",
                    allowNull: false
                }
            });
            usuario.belongsTo(models.programa, {
                foreignKey: {
                    name: "programa_usuario",
                    allowNull: false
                }
            });
            usuario.hasOne(models.historico, {
                foreignKey: {
                    name: "usuario_historico",
                    allowNull: false
                }
            });
        }
    }

    usuario.init({
        rut: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.STRING(12)
        },
        nombres: {
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        apellidos: {
            type: DataTypes.STRING(41),
            allowNull: false,
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
            name: "fecha_nacimiento"
        },
        telefono: DataTypes.STRING(12),
        direccion: DataTypes.STRING(150),
        email: DataTypes.STRING(100)
    }, {
        sequelize,
        modelName: 'usuario',
    });
    return usuario;
};