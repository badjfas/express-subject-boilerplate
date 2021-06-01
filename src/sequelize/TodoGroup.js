module.exports = (sequelize, DataTypes) => {
  const TodoGroup = sequelize.define(
    "TodoGroup",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("now()"),
      },
    },
    {
      timestamps: false,
    }
  );
  return TodoGroup;
};
