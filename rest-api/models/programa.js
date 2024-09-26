'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class programa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      programa.hasMany(models.usuario, {
        foreignKey: {
          name: "programa_usuario",
          allowNull: false
        }
      });
      programa.belongsTo(models.trabajador, {
        as: "coordinador"
      });
      programa.hasOne(models.trabajador, {
        foreignKey: {
          name: "programa_trabajador",
        }
      });
    }
  }
  programa.init({
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'programa'
  });
  return programa;
};