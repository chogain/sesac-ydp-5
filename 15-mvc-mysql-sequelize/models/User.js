const User = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'user',
      freezeTableName: true,
      timestamps: true,
    }
  );

  return model;
};

module.exports = User;
