'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing,
          as : 'userId'
        },
        onDelete : 'CASCADE'
      },
      productId : {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      purchaseId : {
        allowNull: false,
        type: Sequelize.INTEGER,
        references :
        {
          model : 'Purchases',
          key : 'id',
          as : 'purchaseId'
        },
        onDelete : 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userProducts');
  }
};