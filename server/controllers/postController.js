var db = require("../models/index");
const Posts = db.post;

// ********Add Post*******//
const addPost = async (req, res) => {
  try {
    const { title, description, published, user_id } = req.body;
    if (!(title && description && user_id)) {
      res.status(400).send("All fields are required");
    }
    const post = await Posts.create({
      title,
      description,
      published,
      user_id,
    });
    res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    console.log(error);
  }
};

// ********Find Posts By User Id*******//
const postsByUserId = async (req, res) => {
  try {
    const PostsList = await Posts.findAll({
      where: {
        user_id: req.params.user_id,
      },
    });
    if (!PostsList) {
      return res.send("No post found");
    }
    res.status(200).json({
      success: true,
      PostsList,
    });
  } catch (error) {
    console.log(error);
  }
};

// ********Find All posts for admin********//
const AllPost = async (req, res) => {
  try {
    const PostsList = await Posts.findAll({
      where: {
        published: false,
      },
    });
    if (!PostsList) {
      return res.send("No post found");
    }
    res.status(200).json({
      success: true,
      PostsList,
    });
  } catch (error) {
    console.log(error);
  }
};

//********Approve post by admin********//
const approvePost = async (req, res) => {
  try {
    await Posts.update(
      { published: true },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).send("post approved successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addPost,
  postsByUserId,
  AllPost,
  approvePost,
};
