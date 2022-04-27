const blogModel = require("../Model/blogModel");
const authorModel = require("../Model/authorModel");

const checkDeleteStatus = async function(req,res){
    
let blogId = req.params.blogId
let checkBlogId = await blogModel.findById(blogId)
if(!checkBlogId){
    return res.status(404).send({status:false ,msg:"Blog Id is not valid"})
}
if(checkBlogId.isdeleted ==true){
checkBlogId.deletedAt = Date.now()    
}
res.status(200).send({status:true , data:checkBlogId})
}

module.exports.checkDeleteStatus = checkDeleteStatus