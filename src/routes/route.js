const express = require('express');
const router = express.Router();
const Controller = require("../controller/Controller")

router.post("/authors", Controller.createAuthor)
router.post("/authorLogin", Controller.logIn)

router.post("/blogs",Controller.createBlog )
router.get("/blogs",Controller.getBlog)
router.put("/blogs/:blogid",Controller.putBlog)
router.delete("/blogs/:blogId" ,Controller.checkDeleteStatus)
router.delete("/blogs" ,Controller.DeleteStatus)

module.exports = router;