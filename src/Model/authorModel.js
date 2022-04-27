const mongoose = require('mongoose');
const validator = require('validator'); 
const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    income: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        enum: ["Ms", "Mrs", "Miss"]
    },
    emailid: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (emailid) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid)
            }, message: 'Please fill a valid email address', isAsync: false
        }

    },
    password: {
        type:String,
        required: true
    },
},  {timestamps: true });

module.exports = mongoose.model('Author',authorSchema)