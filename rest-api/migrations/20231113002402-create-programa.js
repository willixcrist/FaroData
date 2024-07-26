'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('programas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull:false
      },
      descripcion: {
        type: Sequelize.STRING(50),
        allowNull:false
      },
      coordinador: {
        type: Sequelize.STRING(12),
        allowNull:false,
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
    await queryInterface.dropTable('programas');
  }
};