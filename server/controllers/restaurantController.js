var db = require("../models/index");
const Restaurants = db.restaurant;

// ********Add restaurant********//
const addRestaurant = async (req, res) => {
  try {
    // get restaurant input
    const { name, address, contact } = req.body;
    // validate restaurant input
    if (!(name && address && contact)) {
      res.status(400).send("All fields are required");
    }
    // check if restaurant already exists
    const oldRestaurant = await Restaurants.findOne({
      where: {
        name,
      },
    });
    if (oldRestaurant) {
      return res.status(409).send("Can not add same restaurant");
    }
    // add new restaurant
    const restaurant = await Restaurants.create({
      name,
      address,
      contact,
    });
    // return new restaurant
    res.status(201).json({
      success: true,
      restaurant,
    });
  } catch (error) {
    console.log(error);
  }
};

// ********Get All restaurant********//
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurants.findAll();
    if (!restaurants) {
      return res.send("No restaurant found");
    }
    res.status(200).json({
      success: "true",
      result: restaurants.length,
      restaurants,
    });
  } catch (error) {
    console.log(error);
  }
};

// ********Get a restaurant by id********//
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurants.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!restaurant) {
      return res.status(404).send("No restaurant found with this id");
    }
    res.status(200).json({
      restaurant,
    });
  } catch (error) {
    console.log(error);
  }
};

// ********Update a restaurant********//
const updateRestaurant = async (req, res) => {
  try {
    const restaurant = {
      name: req.body.name,
      address: req.body.address,
      contact: req.body.contact,
    };
    await Restaurants.update(restaurant, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send("restaurant updated successfully");
  } catch (error) {
    console.log(error);
  }
};

// ********Delete a restaurant********//

const deleteRestaurant = async (req, res) => {
  try {
    await Restaurants.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send("Restaurant deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};
