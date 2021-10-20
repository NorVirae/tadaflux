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
    }

}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)
