const sequelize = require('../config/connection');
const { User, Lots } = require('../models');

const userData = require('./userData.json');
const lotData = require('./lotData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const lots = await Lots.bulkCreate(lotData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

module.exports = seedDatabase;