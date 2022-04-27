const authorModel = require("../Model/authorModel");

const createAuthor= async function (req, res) {
    let data = req.body
    let emailidexist = await authorModel.findOne({email:data.email})
    if (emailidexist){
        return res. status(400).send({status:false,meg:"email alredy exist"})
    }
    
    let author_data = await authorModel.create(data)
    res.send({data:author_data})
}
module.exports.createAuthor= createAuthor