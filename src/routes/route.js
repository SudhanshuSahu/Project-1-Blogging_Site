const express = require('express');
const router = express.Router();
const authorController = require("../controller/authorController")
const blogController= require("../controller/blogController")
const getBlogController= require("../controller/getBlogController")
const deleteBlogController= require("../controller/deleteBlogController")

router.post("/createauthor", authorController.createAuthor)
router.post("/createblog",blogController.createBlog )
router.get("/getblog",getBlogController.getBlog)
router.delete("/createblogs/:blogId" , deleteBlogController.checkDeleteStatus)

module.exports = router;