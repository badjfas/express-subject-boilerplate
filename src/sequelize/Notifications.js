module.exports = (sequelize, DataTypes) => {
    const Notifications = sequelize.define(
        "Notifications",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            senderId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            receiverId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            message: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            isRead: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            roomId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            postId: {
                type: DataTypes.INTEGER,
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

    return Notifications;
};
