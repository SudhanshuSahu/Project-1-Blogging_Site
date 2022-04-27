const blogModel = require("../Model/blogModel");
const authorModel = require("../Model/authorModel");

const getBlog = async function (req, res) {
    let query = req.query
    let con = {isdeleted:false , ispublished:true}
    let filter = {
        ...con,
        ...query
    }
    let blog = await blogModel.find(filter).populate("authorId")
    if(blog.length==0) res.status(404).send({msg:"no data found"})
     res.status(200).send({data:blog})
}

module.exports.getBlog = getBlog