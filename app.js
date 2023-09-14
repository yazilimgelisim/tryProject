const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const {join} = require('path')
require('dotenv').config()

//! Varibles and arrays
let PORT = process.env.PORT || 3000


//! Template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', join(__dirname, 'views'))

//! Middleware
app.use(express.static(join(__dirname, 'public')))

//! Routes
app.get('/', (req, res)=>{
    res.render('site/index')
})

app.listen(PORT, ()=>{
    console.log(`Server is running http://127.0.0.1:${PORT}`)
})