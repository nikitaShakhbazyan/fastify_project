const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  }
}, {
  // Дополнительные параметры для модели (например, если вы хотите контролировать имена таблиц или схемы)
  tableName: 'employees',  // Указываем название таблицы в базе данных
  timestamps: true,        // Sequelize будет автоматически управлять createdAt и updatedAt
});

module.exports = Employee;
