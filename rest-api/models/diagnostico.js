'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class diagnostico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      diagnostico.hasMany(models.usuario, {
        foreignKey: {
          name: "diagnostico_usuario",
          allowNull: false
        }
      });
    }
  }
  diagnostico.init({
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'diagnostico'
  });
  return diagnostico;
};