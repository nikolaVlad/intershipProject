'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Purchase.belongsTo(models['User'])
    }
  };
  Purchase.init(
      {
          userId: {
              allowNull: false,
              type: DataTypes.INTEGER,
          },
          date: {
              allowNull: false,
              type: DataTypes.DATE,
          },
          amount: {
              allowNull: false,
              type: DataTypes.FLOAT(3),
          },
          tax: {
            allowNull : false,
            type : DataTypes.INTEGER
          },
      },
      {
          sequelize,
          modelName: 'Purchase',
      }
  );
  return Purchase;
};