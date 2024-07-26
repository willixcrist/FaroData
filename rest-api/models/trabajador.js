'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trabajador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      trabajador.belongsTo(models.programa, {
        foreignKey: {
          name: "programa_trabajador",
        }
      });
      trabajador.hasOne(models.programa, { as: "coordinador" });
      models.programa.hasOne(trabajador, {
        foreignKey: {
          name: "programa_trabajador",
          allowNull: false
        }
      });
      trabajador.hasMany(models.historico, {
        foreignKey: {
          name: "trabajador_historico",
          allowNull: false
        }
      });
    }
  }
  trabajador.init({
    rut: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING(12)
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(41),
      allowNull: false,
    },
    cargo: DataTypes.STRING,
    perfil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trabajador',
    tableName: "trabajadores"
  });
  return trabajador;
};