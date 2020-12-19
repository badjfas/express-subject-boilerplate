module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define(
        "Like",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userLid: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            postLid: {
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

    return Like;
};
