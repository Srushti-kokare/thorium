const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: {type:String, required:true},
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: {type:String, required:true},
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted: {type:Boolean, default:false},
    age: Number,
    post:{type:[],default:[]}
}, { timestamps: true });

module.exports = mongoose.model('User2', userSchema)
