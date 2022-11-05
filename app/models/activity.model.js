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
      // created_at: {
      //   type: DataTypes.DATE,
      //   defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      //   allowNull: false,
      // },
      // updated_at: {
      //   type: DataTypes.DATE,
      //   defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      //   allowNull: false,
      // },
      // deleted_at: {
      //   type: DataTypes.DATE,
      //   allowNull: true,
      // },
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
