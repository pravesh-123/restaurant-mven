module.exports = (Sequelize, DataTypes) => {
  const Restaurant = Sequelize.define(
    "restaurants",
    {
      name: DataTypes.STRING,
      address: {
        type: DataTypes.STRING,
      },
      contact: {
        type: DataTypes.INTEGER,
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
  return Restaurant;
};
