const express = require('express');
const router = express.Router();
const Controller = require("../controller/Controller")
const mid = require("../middleware/middleware")

router.post("/authors", Controller.createAuthor)
router.post("/blogs",mid.auth,Controller.createBlog )
router.get("/blogs",mid.auth,mid.authrize,Controller.getBlog)
router.put("/blogs/:blogid",mid.auth,mid.authrize,Controller.putBlog)
router.delete("/blogs/:blogId",mid.auth,mid.authrize,Controller.checkDeleteStatus)
router.delete("/blogs" ,mid.auth,mid.authrize2,Controller.DeleteStatus)
router.post("/login" ,Controller.logIn)

module.exports = router;