const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) 
        {
            Post.hasMany(models['PostComment'], 
            {
                onDelete: 'CASCADE',
            });

            Post.belongsTo(models.User, 
            {
                through: models.Comment,
                onDelete: 'CASCADE',
            });

            Post.belongsTo(models.Topic, {
                onDelete: 'CASCADE',
            });
        }
    }
    Post.init(
        {
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            topicId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'Post',
        }
    );
   
    return Post;
};
