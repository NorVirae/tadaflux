const User = require("../model/user")
const slugify = require("slugify");
const product = require("../model/product");

exports.CreateUser = async (req, res) => {
   //
//    name
// ProductId
// BuyerId
// description
// price
// color
// brand
// qty
// location
// expiry
// timeOfUser
console.log("THIS IS THE HEADER FOR CREATE PRODUCTS", req.headers)
   let productL = req.body.products.length;
   let productList = req.body.products
   for (let count=0; count<productL; count++){
      try{
      await new User({name:productList[count].name,
                  productId:productList._id,
               BuyerId:productList[count].BuyerId,
               description:productList[count].description,
               price:productList[count].price,
               color:productList[count].color,
               brand:productList[count].brand,
               qty:productList[count].qty,
               location:productList[count].location,
               expiry:productList[count].expiry}).save()
      console.log(productList[count])}
      catch(err){
         // console.log(err)
         console.log(err)
      }
   }
   res.send("User successfully received!")

//    req.body.slug = slugify(req.body.name)
   // try{res.json(await new User(req.body).save())}
   // catch(err){
   //    console.log(err)
   //    res.status(400).send("Unable to create Product")
   // }
}

exports.ReadUser = async (req, res) => {
    //
    console.log(req.params)
    const prod = await User.findOne({slug:req.params.id})
    console.log(prod)
   res.json(prod) 
 }
 
 exports.ListUser = async (req, res) => {
    //
    res.json(await User.find().populate('User').populate('Product').exec())
 }
 exports.UpdateUser = async (req, res) => {
   //
   try{
      console.log("THIS IS FROM THE PRODUCT UPDATE",req.body)
      req.body.slug = slugify(req.body.name)
      res.json(await User.findOneAndUpdate({_id:req.body._id},
          {Activated:true}, {new:true}))}
      catch (err){
         console.log(err)
      }
   
}

exports.DeleteUser = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE PRODUCT", req.body)
      const deleted = await User.deleteOne({slug:req.body.slug})
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}

exports.DeleteAllUsers = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE PRODUCT", req.body)
      const deleted = await User.remove()
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}