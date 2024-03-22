import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.get('/ping',(req,res) =>{
  res.send('pong')
})

app.listen('8080',() =>{
  console.log('Server is running on port 8080')
})

