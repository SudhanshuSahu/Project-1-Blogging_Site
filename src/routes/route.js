const express = require('express');
const router = express.Router();
const authorController = require("../controller/authorController")
const blogController= require("../controller/blogController")

router.post("/createauthor", authorController.createAuthor)
router.post("/createblog",blogController.createBlog )


module.exports = router;