const blogModel = require("../Model/blogModel");
const authorModel = require("../Model/authorModel");

const getBlog = async function (req, res) {
    let filter = req.query
    filter.isdeleted = false
    filter.ispublished = true
    let blog = await blogModel.find(filter).populate("authorId")
    if(blog.length==0) res.status(404).send({msg:"no data found"})
     res.status(200).send({data:blog})
}

module.exports.getBlog = getBlog