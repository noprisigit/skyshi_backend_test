module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define("activities", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.TIMESTAMP,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.TIMESTAMP,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.TIMESTAMP,
      allowNull: true,
    },
  });

  return Activity;
};
