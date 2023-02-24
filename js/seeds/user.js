const sequelize = require('../connection');
const Users = require('../models/users');

const userData = [
    {
        displayName: 'maxxAbow',
        emailAddress: 'mbowman@welland.com',
        userId: 'kfdjri984kfdjth',
        password: 'carhardt',
        createDate: '2023-02-02'
    },
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;