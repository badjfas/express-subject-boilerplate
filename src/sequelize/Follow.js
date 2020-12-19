module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define(
        "Follow",
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
            followId: {
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

    return Follow;
};
