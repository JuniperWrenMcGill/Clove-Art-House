const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Admin model
const Owner= sequelize.define('Owner', {
  // Define attributes
  adminId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // Additional fields if needed
  // Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

// Export the Admin model
module.exports = Owner;
