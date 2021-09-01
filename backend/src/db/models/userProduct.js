'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        UserProduct.belongsTo(models['User'])
    }
  };
  UserProduct.init(
      {
          userId: {
              allowNull: false,
              type: DataTypes.INTEGER,
          },
          productId: {
              allowNull: false,
              type: DataTypes.INTEGER,
          },
          purchaseId: {
              allowNull: false,
              type: DataTypes.INTEGER,
          },
      },
      {
          sequelize,
          modelName: 'UserProduct',
      }
  );
  return UserProduct;
};