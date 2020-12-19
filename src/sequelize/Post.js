module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        "Post",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userPid: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            contents: {
                type: DataTypes.STRING(4000),
                allowNull: true
            },
            likesCount: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            files: {
                type: DataTypes.STRING,
                allowNull: true
            },
            friendId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            departmentId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            CommentsCount: {
                type: DataTypes.STRING(20),
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

    return Post;
};
