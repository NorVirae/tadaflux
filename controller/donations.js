const Order = require("../model/order")
const slugify = require("slugify");
const product = require("../model/product");
const Donations = require("../model/donations");

exports.CreateDonations = async (req, res) => {
      try{
            await new Donations({
                noofpeople:req.body.noofpeople,
                amount:req.body.amount,
                views:req.body.views}).save()
            console.log(productList[count])
            res.send("Donations successfully received!")
            }
      catch(err){
         // console.log(err)
         console.log(err)
      }
}

exports.CreateDonationsDefault = async (req, res) => {
    try{
        res.send(await new Donations({
            donationname:"afghan",
              noofpeople:0,
              amount:0,
              views:0}).save())
          }
    catch(err){
       // console.log(err)
       console.log(err)
       res.send(err)
    }
}

exports.ReadDonations = async (req, res) => {
    //
    try{
         console.log(req.body, "WHAT THE FUCK")
         const prod = await Donations.findOne({donationname:req.body.name})
         console.log(prod)
         res.json(prod)}

    catch(err){
       console.log(err)
       res.send("This send!")
    }
 }
 
 exports.listDonations = async (req, res) => {
    //
    res.json(await Donations.find())
 }

 exports.UpdateDonations = async (req, res) => {
   //
   try{
      console.log("THIS IS FROM THE Donations UPDATE",req.body)
      req.body.id = slugify(req.body.name)
      res.json(await Donations.findOneAndUpdate({_id:req.body._id},
          req.body, {new:true}))}
      catch (err){
         console.log(err)
      }
   
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

const updateDonorsAndMoney = async ()=>{
   let resiponse = {}
   let data = {}
   setInterval(async()=>{
      console.log("interval is running!")
      data = await Donations.findOne({donationname:"afghan"})
      resiponse =  await Donations.findOneAndUpdate({donationname:"afghan"},
         {noofpeople:data.noofpeople + getRandomInt(3),
         amount:data.amount + getRandomInt(50)}, {new:true})
      console.log(resiponse)

   }, 700000)
}

updateDonorsAndMoney()



exports.DeleteDonations = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE Donations", req.body)
      const deleted = await Donations.deleteOne({slug:req.body.slug})
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}

exports.DeleteAllDonations = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE Donations", req.body)
      const deleted = await Donations.remove()
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}