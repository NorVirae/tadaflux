const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const Donations = new mongoose.Schema({
    donationname:{
        type:String,
        default:"afghan",
        unique:true
    },
    noofpeople:{
        type:Number,
        default:0
    },

    amount:{
        type:Number,
        default:0

    },

    views:{
        type:Number,
        default:0

    }
    
}, {timestamp:true})


module.exports = mongoose.model("Donations", Donations)
