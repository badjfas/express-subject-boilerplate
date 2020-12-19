module.exports = (sequelize, DataTypes) => {
    const ChatRoom = sequelize.define(
        "ChatRoom",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            participantId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            myId: {
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

    return ChatRoom;
};
