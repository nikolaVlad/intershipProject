const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PostComment extends Model {
        static associate(models) 
        {
            PostComment.belongsTo(models['User']);
            PostComment.belongsTo(models['Post']);
        }
    }
    PostComment.init(
        {
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            postId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            content: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'PostComment',
        }
    );
    return PostComment;
};
