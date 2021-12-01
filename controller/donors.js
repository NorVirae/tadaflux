const Order = require("../model/order")
const slugify = require("slugify");
const product = require("../model/product");
const Dornors = require("../model/dornors.js");

exports.CreateDonors = async (req, res) => {
    console.log("CREATE DORNORS WAS CALLED")
      try{
            await new Dornors({
                email:req.body.email,
                address:req.body.address,
                currency:req.body.currency}).save()
            // console.log(productList[count])
            console.log("successfully created Dornor")
            res.send("Donors successfully Added!")
            }
      catch(err){
         // console.log(err)
         res.status(404).send("email already exist on the anon network")
         console.log("IMMA",err)
      }
}

// exports.CreateDonationsDefault = async (req, res) => {
//     try{
//         res.send(await new Donations({
//             donationname:"afghan",
//               noofpeople:0,
//               amount:0,
//               views:0}).save())
//           }
//     catch(err){
//        // console.log(err)
//        console.log(err)
//        res.send(err)
//     }
// }

exports.ReadDonors = async (req, res) => {
    //
    try{
         console.log(req.body, "WHAT THE FUCK")
        //  const del = await Dornors.deleteOne({address:"xkcnwekcomewcowencwekkewdke"})
         const all = await Dornors.find({})
         console.log(all)
         const prod = await Dornors.findOne({email:req.body.email})
         if (prod == null){
             console.log('its null')
             res.status(400).send("email not found")
         }else {
            console.log(prod)
            res.json(prod)}
         }
         

    catch(err){
       console.log(err)
       res.send("This send!")
    }
 }
 
 exports.listDonors = async (req, res) => {
    //
    res.json(await Dornors.find())
 }

 exports.UpdateDonors = async (req, res) => {
   //
   try{
      console.log("THIS IS FROM THE Donations UPDATE",req.body)
      res.json(await Dornors.findOneAndUpdate({email:req.body.email},
          {address:req.body.address,
            currency:req.body.currency}, {new:true}))}
      catch (err){
         console.log(err)
      }
   
}




exports.DeleteDornors = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE Donations", req.body)
      const deleted = await Dornors.deleteOne({slug:req.body.slug})
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}


exports.DeleteAllDornors = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE Donations", req.body)
      const deleted = await Dornors.remove()
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}