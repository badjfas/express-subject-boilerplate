module.exports = (sequelize, DataTypes) => {
    const GroupChatRoom = sequelize.define(
        "GroupChatRoom",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            participants: {
                type: DataTypes.STRING,
                allowNull: true
            },
            roomImage: {
                type: DataTypes.STRING,
                allowNull: true
            },
            title: {
                type: DataTypes.STRING,
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

    return GroupChatRoom;
};
