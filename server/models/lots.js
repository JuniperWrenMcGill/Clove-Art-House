const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lots extends Model {}

Lots.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    photoUrl: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    startingPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currentPrice: {
      type: DataTypes.FLOAT,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'lots',
  }
);

module.exports = Lots;