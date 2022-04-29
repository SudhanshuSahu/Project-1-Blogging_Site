const jwt = require('jsonwebtoken');
const blogModel = require("../Model/blogModel");

let auth = function(req,res,next)
{
    try{
    let token = req.headers['x-Api-Key'];
    if(!token) token = req.headers['x-api-key'];
    if(!token) res.status(400).send({msg:"token must be given"})
    
    let valid = jwt.verify(token , 'project-1')
    //if (!valid) return res.send({ msg: "token is invalid" });

    req['x-api-key'] = token
    next()
   
    }
    catch(e){
        res.status(500).send(e.message)
    }
}

let authrize = async function(req,res,next)
{
    try{
        let token = req['x-api-key'];
        var decoded = jwt.decode(token)
        let authorid = decoded.authorId
        let blogs = await blogModel.find({ authorId : authorid , isdeleted:false }).select({_id:1})
        for(let i=0; i<blogs.length; i++)
        {
            if(req.params.blogid == blogs[i]._id)
            {
               next()
            }
        }
        return res.status(403).send({msg:"unauthrized user"})
        
    }
    catch(e){
        res.status(500).send(e.message)
    }
}

let authrize2 = async function(req,res,next)
{
    try{
        let token = req['x-api-key'];
        var decoded = jwt.decode(token)
        let authorid = decoded.authorId
        let blogs = await blogModel.find({ authorId : authorid , isdeleted:false })

            let data=req.query
            let key = Object.keys(data)
            let c =0
            for(let i=0; i<blogs.length; i++) 
            {
                for(let j=0; j<key.length; j++)
                {
                    let x = key[j]
                    if(data[x] == blogs[i][x])
                    {
                        c++
                    }
                }
                if(key.length == c)
                {
                    return res.send("done")
                }
                c=0
            }
            
        return res.status(403).send({msg:"unauthrized user"})
        
    }
    catch(e){
        res.status(500).send(e.message)
    }
}

module.exports.auth =auth
module.exports.authrize =authrize
module.exports.authrize2 =authrize2