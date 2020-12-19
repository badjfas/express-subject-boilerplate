module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        "Comment",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            postId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            childCommentId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            text: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: sequelize.literal("now()")
            }
        },
        {
            timestamps: false
        }
    );

    return Comment;
};
