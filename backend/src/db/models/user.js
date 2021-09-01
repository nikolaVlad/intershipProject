'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) 
        {

           User.hasMany(models['Cart'], {
               onDelete : 'CASCADE'
           })

           User.hasMany(models['Wishlist'] , {
               onDelete : 'CASCADE'
           })

           User.hasMany(models['Comment'], {
               onDelete: 'CASCADE',
           });

           User.hasMany(models['UserProduct'] , {
               onDelete : 'CASCADE'
           })

           User.hasMany(models['Purchase'], {
               onDelete: 'CASCADE',
           });

           User.hasMany(models['Topic'], {
               onDelete: 'CASCADE',
           });

           User.hasMany(models['Post'], {
               onDelete: 'CASCADE',
           });

           User.hasMany(models['PostComment'], {
               onDelete: 'CASCADE',
           });
       
        }
    }
    
    User.init(
        {
            firstName: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            lastName: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            creditCard: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            country: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            bio : {
                allowNull : true,
                type : DataTypes.STRING
            },
            birthdate: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'User',
        }
    );
    return User;
};
