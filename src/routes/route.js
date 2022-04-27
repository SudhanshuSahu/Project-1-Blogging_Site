const express = require('express');
const router = express.Router();
const authorController = require("../controller/authorController")
const blogController= require("../controller/blogController")
const getBlogController= require("../controller/getBlogController")
<<<<<<< HEAD
const deleteBlogController= require("../controller/deleteBlogController")
=======
const putBlogController= require("../controller/putBlogController")
>>>>>>> 7bf1cfaff70ccc979990dbb10beeef184c77e096

router.post("/createauthor", authorController.createAuthor)
router.post("/createblog",blogController.createBlog )
router.get("/getblog",getBlogController.getBlog)
<<<<<<< HEAD
router.delete("/createblogs/:blogId" , deleteBlogController.checkDeleteStatus)
=======
router.put("/blogs/:blogid",putBlogController.putBlog)

>>>>>>> 7bf1cfaff70ccc979990dbb10beeef184c77e096

module.exports = router;