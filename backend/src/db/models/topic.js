const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Topic extends Model {
        static associate(models) 
        {
            Topic.hasMany(models['Post'], 
            {
                onDelete : 'CASCADE'
            })    

            Topic.belongsTo(models['User']);
        }
    }
    Topic.init(
        {
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'Topic',
        }
    );

    return Topic;
};
