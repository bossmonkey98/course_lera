const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const multer = require("multer")
const bodyParser = require("body-parser")

dotenv.config()
const app = express()
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

console.log(MONGO_URL,"lol")


app.use(express.json())
app.use(bodyParser.json())
app.use(cors)

// DB connect 
mongoose.connect(MONGO_URL).then(()=>{
    app.listen(PORT,()=>console.log("listening to",PORT))
})

exports.app = app