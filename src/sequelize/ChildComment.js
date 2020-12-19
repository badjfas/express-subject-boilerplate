module.exports = (sequelize, DataTypes) => {
    const ChildComment = sequelize.define(
        "ChildComment",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            myId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            targetUserId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            targetPostId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            targetCommentId: {
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

    return ChildComment;
};
