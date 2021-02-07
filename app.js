require('dotenv').config({ path: './.env' })

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// security
app.use(helmet.hidePoweredBy({ setTo : 'HelloMyWorld' }))

// cors
var wlist = ['https://aibees.github.io', 'http://127.0.0.1:4000'];
// const corsOptions = {
//     origin : function(origin, callback) {
//         var isListed = wlist.indexOf(origin) !== -1;
//         callback(null, isWhitelisted);
//     },
//     credentials: true
// }
app.use(cors({origin: wlist}));

//DB connection
const connection = require('./database/mysql')

// routes
app.use('/blog', require('./routers/blog.js'))

module.exports = app