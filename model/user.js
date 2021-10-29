const mongoose = require('mongoose')
const {objectId} = mongoose.Schema

const userSchema = new mongoose.Schema({
    name:String,
    picture:{type:String, default:''},
    email: {
        index:true,
        required:true,
        type:String
    },

    role: {
        type:String,
        default:'subscriber'
    },


    address: {
        type: String
    },

    activated: {
        type: Boolean,
        default:false
    },

    plans: [{name:{type:String},
            price:{type:Number},
            profit:{type:Number},
            active:{type:Boolean}   
            }],
}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)
