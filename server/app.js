const express = require("express");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 7000;
require("./models/index");
var userCtrl = require("./controllers/userController");
const restaurantCtrl = require("./controllers/restaurantController");
const postCtrl = require("./controllers/postController");

const auth = require("./middleware/auth");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json({
    success: "True",
    message: "Hello EveryOne",
  });
});

app.post("/register", userCtrl.signup);
app.post("/login", userCtrl.login);
app.post("/add-restaurant", restaurantCtrl.addRestaurant);
app.get("/restaurants", auth, restaurantCtrl.getRestaurants);
app.get("/restaurant/:id", auth, restaurantCtrl.getRestaurantById);
app.patch("/restaurant/:id", auth, restaurantCtrl.updateRestaurant);
app.delete("/restaurant/:id", auth, restaurantCtrl.deleteRestaurant);
app.post("/add-post", postCtrl.addPost);
app.get("/post/:user_id", postCtrl.postsByUserId);
app.get("/posts", postCtrl.AllPost);
app.patch("/approve-post/:id", postCtrl.approvePost);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
