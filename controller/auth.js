const User = require('../model/user')

exports.createOrUpdateUser = async (req, res) => {
    const {name, email, picture} = req.user
    const user  = await User.findOneAndUpdate({email}, { name, picture}, {new:true})
    console.log(req.user)

    if (user){
        res.json(user)
        console.log(`FROM THE IF ${user}`)
    } 
    else{
        console.log("THIS IS FROM THE CREATE AND UPDATE",req.user)
        const newUser = new User({
            name,
            email,
            picture,
            activated:false,
        }).save()

        console.log('REGISTRATION OF NEW USER '+ newUser)
        res.json(
            newUser
        )
    }
}

exports.currentUser = async (req, res) => {
    const {email} = req.user
    const firebaseUser = await User.findOne({email}).exec()
    res.json(firebaseUser)
    

}

exports.adminUser = async (req, res) => {
    const {email} = req.user
    const firebaseUser = await User.findOne({email}).exec()
    res.json(firebaseUser)
    

}

exports.DeleteAllUsers = async (req, res) => {
    //
    try{
       console.log("THIS IS DELETE USER", req.body)
       const deleted = await User.remove()
       console.log("THIS IS THE DELETED FILE", deleted)
       res.json(deleted)
 
    }
    catch(err){
       res.status(400).send(err)
    }
 }