const blogModel = require("../Model/blogModel");
const authorModel = require("../Model/authorModel");

const createBlog = async function (req, res) {
    let data = req.body
    if(data.hasOwnProperty('ispublished'))
    {
        if (data.ispublished == true) {
            data.publishedAt = Date.now()
        }
    }
    let authorId = data.authorId
    let checkAuthorId = await authorModel.find({ _id: authorId })
    if (!checkAuthorId) {
        res.status(400).send({ status: false, msg: "Enter valid Author Id" })
    }
    let createBlogData = await blogModel.create(data)
    res.status(201).send({ status: true, data: createBlogData })
}

module.exports.createBlog = createBlog
