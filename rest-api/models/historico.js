'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class historico extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            historico.belongsTo(models.usuario, {
                foreignKey: {
                    name: "usuario_historico",
                    allowNull:false
                }
            });
            historico.belongsTo(models.trabajador, {
                foreignKey: {
                    name: "trabajador_historico",
                    allowNull: false
                }
            });
        }
    }
    historico.init({
        motivoCambio: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descripcionCambio: {
            type: DataTypes.STRING(300),
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        },

    }, {
        sequelize,
        modelName: 'historico'
    });
    // historico.sync({force:true});
    return historico;
};