'use strict';

const { idText } = require("typescript");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('personal_fl', {
      rut: {
        type: Sequelize.STRING(12),
        primaryKey:true,
        allowNull:false
      },
      nombre: {
        type: Sequelize.STRING(20)
      },
      apellido: {
        type: Sequelize.STRING(20)
      },
      cargo: {
        type: Sequelize.STRING(50)
      },
      programa: {
        type: Sequelize.INTEGER
      },
      perfil: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('personal_fl');
  }
};