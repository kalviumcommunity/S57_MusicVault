import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './routes/routes.js'
import {config} from 'dotenv'
config()

const app = express()
const PORT = 8080
const MONGODB_URL = 'mongodb+srv://truebillionhari:OmiBDtVft8yyq2oa@cluster0.68i0re4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(MONGODB_URL)
.then(() =>{
  console.log(`connected to database ${MONGODB_URL}`)
})
.catch((err)=>{
  console.log(err)
})
app.use(cors())
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use('/',routes)

app.listen(PORT,() =>{
  console.log( `server is running on port ${PORT}`)
})