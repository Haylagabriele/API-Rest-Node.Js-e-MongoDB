//Config inicial
require ('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express(); 

// inicializa um novo
// forma de ler json/ middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)



app.get('/', (req, res) => {
  res.json({ message: 'Oi Express!' })
})
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
mongoose
.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.nalot.mongodb.net/bancodoapi?retryWrites=true&w=majority`,
  )
.then(() => {
  console.log('Conectou ao MongoDB!')
  app.listen(3000)
})
.catch((err) => console.log(err))
  

//ip do mongoDb
//170.83.154.255/32
// senha :N9lqBRnwhvVxfm0G

//mongodb+srv://Hayla:N9lqBRnwhvVxfm0G@apicluster.nalot.mongodb.net/bancodoapi?retryWrites=true&w=majority