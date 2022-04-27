const mongoose = require("mongoose")
 const ObjectId = mongoose.Schema.Types.ObjectId 
 
 const blogSchema = new mongoose.Schema({
     title : {
         type : String,
         required:true
     },
     body:{
         type:String,
         required : true
     },
     authorId:{
         type:ObjectId,
         ref:"Author",
         required:true,
     },
    tags:[{type:String}] ,
    category: {type:String,
         required:true
        }, 
    isdeleted: {type:Boolean,
         default: false
        },
    ispublished: {type:Boolean,
         default: false
        },
    deletedAt:{type:Date,
         default: null
        },

    publishedAt:{type:Date,
         default: null
        }
 },{timestamps:true})

 module.exports = mongoose.model('Blog',blogSchema)