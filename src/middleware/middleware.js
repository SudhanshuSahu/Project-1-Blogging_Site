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
        let blogs = await blogModel.find({ authorId : authorid , isdeleted:false }).select({_id:1})
        for(let i=0; i<blogs.length; i++)
        {
            if(req.params.blogid == blogs[i]._id)
            {
               return next()
            }
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
        let blogs = await blogModel.find({ authorId : authorid , isdeleted:false })
        let data=req.query
        if (Object.keys(data).length === 0) return res.status(400).send({ status:false, msg: "query must be given" })
        let key = Object.keys(data)
        let c =0
            for(let i=0; i<blogs.length; i++) 
            {
                for(let j=0; j<key.length; j++)
                {
                    let x = key[j]
                    if(x == "tags" || x=="subcategory")
                    {
                        let arr = blogs[i][x]
                        let a= data[x]
                        if(arr.indexOf(a))
                        {
                           c++
                        }
                        else{
                            continue
                        }
                    }
                    if(data[x] == blogs[i][x])
                    {
                        c++
                    }
                }
                if(key.length == c)
                {
                    return next()
                }
                c=0
            }
            
        return res.status(403).send({msg:"unauthrized user"})
        
    }
    catch(e){
        res.status(500).send({status:false , msg:e.message})
    }
}

module.exports.auth =auth
module.exports.authrize =authrize
module.exports.authrize2 =authrize2