module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define(
        "Department",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            departmentName: {
                type: DataTypes.STRING(30),
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

    return Department;
};
