const blogModel= require("../Model/blogModel");

const createBlog = async function(req,res){
try{
let data = req.body
let authorId = data.authorId
let checkAuthorId = await authorModel.find({_id:authorId})
if(!checkAuthorId) {
    return res.status(400).send({status:false , msg:"Enter valid Author Id"})
}
let createBlogData = await blogModel.create(data)
res.status(201).send({status:true , data:createBlogData })

}
catch(err){
    res.status(500).send({msg:err.message})
}
}                              

module.exports.createBlog = createBlog
//>>>>>>> f24e1100d6d9aa34bf2b3dbc67be79f4fca65fd7