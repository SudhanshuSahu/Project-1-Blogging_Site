const blogModel = require("../Model/blogModel");
const authorModel = require("../Model/authorModel");

const putBlog = async function (req, res) {
    let blogid = req.params.blogid
    let checkId = await blogModel.findOne({ _id:blogid , isdeleted:false })
    if(!checkId) res.status(404).send({msg:"blog id not exist"})
    let data = req.body
    if(Object.keys(data).length === 0) res.send({msg:"data for updation must be given"})
    if(data.hasOwnProperty('ispublished'))
    {
        if (data.ispublished == true) {
            data.publishedAt = Date.now()
        }
    }
    let blog = await blogModel.findOneAndUpdate(
        {_id:blogid},
        {$set:data},
        {new:true}
    )
     res.status(200).send({data:blog})
}

module.exports.putBlog = putBlog