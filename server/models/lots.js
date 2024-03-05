const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Lot model
const Lots = sequelize.define('Lot', {
  lotId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  lotPhotos: {
    type: Sequelize.ARRAY(Sequelize.STRING) // Store Cloudinary public IDs as strings in an array
  },
  lotDescription: {
    type: Sequelize.TEXT
  },
  startingPrice: {
    type: Sequelize.FLOAT
  },
  currentPrice: {
    type: Sequelize.FLOAT
  },
  durationOfListing: {
    type: Sequelize.INTEGER // Duration in seconds
  }
});

// Export the Lot model
module.exports = Lots;
