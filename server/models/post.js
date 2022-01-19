module.exports = (Sequelize, DataTypes) => {
  const Post = Sequelize.define(
    "posts",
    {
      title: DataTypes.STRING,
      description: {
        type: DataTypes.STRING,
      },
      published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      user_id: DataTypes.INTEGER,
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
  return Post;
};
