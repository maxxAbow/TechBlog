const sequelize = require('../connection');
const Blurbs = require('../models/users');

const blurbData = [
    {
        userPosted: 'maxxAbow',
        createDate: '2022-02-03',
        postText: 'Iconic first post'
    }
];

const seedBlurbs = () => Blurbs.bulkCreate(blurbData);

module.exports = seedBlurbs;