const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("restaurant", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: { max: 5, min: 0, ideal: 10000 },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize
  .sync({ force: false /*match: /user_management$/*/ }) // force: true  , drop the table if exists and create again
  .then(() => {
    console.log("yes re-sync");
  });
db.users = require("./users")(sequelize, DataTypes);
db.restaurant = require("./restaurant")(sequelize, DataTypes);
db.post = require("./post")(sequelize, DataTypes);

module.exports = db;
