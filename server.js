const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {readdirSync} = require('fs')
require('dotenv').config()



const app = express()
console.log(process.env.DATABASET2)
mongoose.connect(process.env.DATABASET2, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
}).then(()=>console.log("DATABASE CONNECTED SUCCESSFULLY"))
.catch((err)=>{
    console.log(`ERR DETECTED ${err}`)
})



app.use(morgan("dev"))
app.use(bodyParser.json({limit:"2mb"}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

//auth routes
app.use(express.static(__dirname+"/build"))


readdirSync("./routes").map((r)=>app.use('/api', require('./routes/'+r)))

app.get("*", function(req, res, next){
    if ("https" !== req.headers["x-forwarded-proto"] && "production" === process.env.NODE_ENV){
        res.redirect("https://"+req.hostname+req.url);
    }else {
        next();
    }
});




app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/build/"+"index.html")
})

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/build/"+"index.html")
})

console.log(__dirname+"/build/"+"index.html")


app.get("/api", (req, res)=>{
    res.json({"res":"data was accessed succesfully"})
})

const port = process.env.PORT||8000

app.listen(port, ()=>{
    console.log("server just started at port: ", port)
})