const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const Dornors = new mongoose.Schema({
    email:{
        type:String,
        default:"afghan",
        unique:true
    },
    address:{
        type:String,
        default:'0'
    },

    currency:{
        type:String,
        default:"0"

    },

    donated:{
        type:Boolean,
        default:false
    }

    
}, {timestamp:true})


module.exports = mongoose.model("Dornors", Dornors)
