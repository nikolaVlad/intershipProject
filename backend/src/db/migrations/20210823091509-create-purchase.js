'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Purchases', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        userId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'Users', // name of Target model
                key: 'id', // key in Target model that we're referencing,
                as: 'userId',
            },
            onDelete: 'CASCADE',
        },
        date: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        amount: {
            allowNull: false,
            type: Sequelize.FLOAT(3),
        },
        tax: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Purchases');
  }
};