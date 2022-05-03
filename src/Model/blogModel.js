const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true
    },
    body: {
        type: String,
        required: true,
        trim:true
    },
    authorId: {
        type: ObjectId,
        ref: "Author",
        required: true,
    },
    subcategory: [{ type: String , trim:true}],
    category: {
        type: String,
        required: true,
        trim:true
    },
    tags: [{ type: String ,trim:true }],
    isdeleted: {
        type: Boolean,
        default: false
    },
    ispublished: {
        type: Boolean,
        default: false
    },
    deletedAt:Date,
    publishedAt:Date
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)