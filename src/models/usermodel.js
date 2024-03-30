const Sequelize = require("sequelize");
const db = require("../config/db");

const user = db.define("user", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  fecha_expira: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  fecha_registro: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  fecha_actualizado: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});
module.exports = user;
