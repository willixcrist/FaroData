const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "diagnòsticos", deps: []
 * createTable() => "programas", deps: []
 * createTable() => "personal_fl", deps: [programas]
 *
 */

const info = {
  revision: 1,
  name: "prueba",
  created: "2023-11-16T21:37:06.917Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "diagnòsticos",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        descripcion: { type: Sequelize.STRING, field: "descripcion" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "programas",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        nombre: { type: Sequelize.STRING, field: "nombre", allowNull: false },
        descripcion: {
          type: Sequelize.STRING,
          field: "descripcion",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "personal_fl",
      {
        rut: {
          type: Sequelize.STRING,
          field: "rut",
          allowNull: false,
          primaryKey: true,
        },
        nombre: { type: Sequelize.STRING, field: "nombre", allowNull: false },
        apellido: {
          type: Sequelize.STRING,
          field: "apellido",
          allowNull: false,
        },
        cargo: { type: Sequelize.STRING, field: "cargo" },
        perfil: { type: Sequelize.INTEGER, field: "perfil" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        programa_trabajador: {
          type: Sequelize.INTEGER,
          field: "programa_trabajador",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "programas", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["diagnòsticos", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["programas", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["personal_fl", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
