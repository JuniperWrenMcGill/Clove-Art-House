const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define User model
const User = sequelize.define('User', {

  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullName: {
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
  mailingAddress: {
    type: Sequelize.STRING // Mailing address is stored as a string
  },

  // Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

// Export the User model
module.exports = User;
