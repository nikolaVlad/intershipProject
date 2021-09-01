'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
   
    static associate(models) {
      Comment.belongsTo(models['User']);
    }
  };
  Comment.init(
      {
          userId: {
            allowNull: false,
            type : DataTypes.INTEGER,
          }, 
          productId : {
            allowNull : false,
            type : DataTypes.INTEGER
          },
          content : {
            allowNull : false,
            type : DataTypes.TEXT
          }
      },
      {
          sequelize,
          modelName: 'Comment',
      }
  );
  return Comment;
};