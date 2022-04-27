const express = require('express');
const router = express.Router();
//<<<<<<< HEAD
const author = require("../controller/authorController")
//=======
// import authorController here

const blogController= require("../controller/blogConroller")

//>>>>>>> f24e1100d6d9aa34bf2b3dbc67be79f4fca65fd7
//write author create api here
router.post("/createauthor", author.createdAuthor)

//create blog
router.post("/blogs",blogController.createBlog )


module.exports = router;