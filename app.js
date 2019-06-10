require('dotenv').config({ path: './.env' })

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// security
app.use(helmet.hidePoweredBy({ setTo : 'HelloMyWorld' }))

//DB connection
const mySql = require('mysql')
const connect = mySql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

connect.connect()

module.exports = app