const sequelize = require('../config/connection');
const seedBlurbs = require('./blurb');
const seedUsers = require('./user');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedBlurbs();

  process.exit(0);
};

seedAll();