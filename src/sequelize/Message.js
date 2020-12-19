module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define(
        "Message",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            toId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            fromId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            roomId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            text: {
                type: DataTypes.STRING(5000),
                allowNull: true
            },
            isRead: {
                type: DataTypes.BOOLEAN,
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

    return Message;
};
