const {Model, DataTypes} = require('sequelize');
const sequelize = require('../connection');

class Blurb extends Model{}

Blurb.init(
  {
    userPosted: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'users',
            key: 'displayName'
        }
    },
    createDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    postText: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
        sequelize,
        timestamps: false,
        modelName: 'blurbs'
  }
    );
    
    module.exports = Blurb;