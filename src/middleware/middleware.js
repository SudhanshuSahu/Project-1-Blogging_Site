const jwt = require('jsonwebtoken');
const blogModel = require("../Model/blogModel");

let auth = async function(req,res,next)
{
    try{
    let header = req.headers
    let key;
    if(('x-api-key' in header))
    {
        key = 'x-api-key'
    }else
    {
        key = 'x-Api-Key'
    }
    if(!(key in header) ) return res.status(400).send({status :false , msg:"token not in the headers"})
    
    let token = header[key];
    if(!token) return  res.status(400).send({status :false , msg:"token value must be given"})
    
    let valid = await jwt.verify(token , 'project-1')
    if (!valid) return res.status(400).send({status:false, msg: "token is invalid" });

    req['x-api-key'] = token
    next()
    }
    catch(e){
        res.status(500).send({status:false , msg:e.message})
    }
}

let authrize = async function(req,res,next)
{
    try{
        let token = req['x-api-key'];
        var decoded = await jwt.decode(token)
        let authorid = decoded.authorId

        let bid = req.params.blogid
        blogsAuthor = await blogModel.findOne({ _id : bid , isdeleted:false }).select({authorId:1 ,  _id:0})
        if(blogsAuthor.authorId == authorid)
        {
            return next()
        }
        return res.status(403).send({msg:"unauthrized user"})
        
    }
    catch(e){
        res.status(500).send({status:false , msg:e.message})
    }
}

let authrize2 = async function(req,res,next)
{
    try{
        let token = req['x-api-key'];
        var decoded = await jwt.decode(token)
        let authorid = decoded.authorId

        let filter=req.query
        if (Object.keys(filter).length === 0) return res.status(400).send({ status:false, msg: "query must be given" })
        filter.authorId = authorid
        filter.isdeleted = false
        let blogs = await blogModel.findOne(filter)
        if(!blogs)  return res.status(403).send({msg:"unauthrized user"})
         next() 
    }
    catch(e){
        res.status(500).send({status:false , msg:e.message})
    }
}

module.exports.auth =auth
module.exports.authrize =authrize
module.exports.authrize2 =authrize2
