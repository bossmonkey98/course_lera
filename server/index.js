import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import authRoutes from './routes/authRoutes.js'


dotenv.config()
const app = express()
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT



app.use(express.json())
app.use(bodyParser.json())
app.use(cors)


// login api
app.use('/',authRoutes)

// DB connect 
mongoose.connect(MONGO_URL).then(()=>{
    app.listen(PORT,()=>console.log("listening to",PORT))
})

export default app