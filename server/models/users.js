module.exports = (Sequelize, DataTypes) => {
  const Users = Sequelize.define(
    "registration",
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      token: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      //tableName: 'userData',
      //timestamps: false,
      //updatedAt: false,
      //createdAt: false,
      //createdAt: 'created_at',
      //updatedAt: 'modified_at',
      //engine: 'MYISAM'
    }
  );
  return Users;
};
