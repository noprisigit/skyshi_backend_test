module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define(
    "activity_groups",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true,
      deletedAt: "deleted_at",
    }
  );

  return Activity;
};
