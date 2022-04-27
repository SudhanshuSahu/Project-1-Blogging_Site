const express = require('express');
const router = express.Router();
const authorController = require("../controller/authorController")
const blogController= require("../controller/blogController")
const getBlogController= require("../controller/getBlogController")

router.post("/createauthor", authorController.createAuthor)
router.post("/createblog",blogController.createBlog )
router.get("/getblog",getBlogController.getBlog)


module.exports = router;