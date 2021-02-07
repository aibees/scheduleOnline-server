const mysql = require('mysql')
const constant = new (require('../constant'))()

const pool = mysql.createPool({
    host           : constant.getData('database', 'host'),
    user           : constant.getData('database', 'user'),
    password       : constant.getData('database', 'pswd'),
    database       : constant.getData('database', 'dtbs'),
    port           : constant.getData('database', 'port'),
    connectionLimit: 30,
    connectTimeout : 100,
    waitForConnections: true
})

// // connection acquire
// pool.on('acquire', (conn) => {
//     console.log(`connection ${conn.threadId} acquired`)
// })

// // connection release
// pool.on('release', (conn) => {
//     console.log(`connection ${conn.threadId} released`)
// })

// connection waiting
pool.on('enqueue', (conn) => {
    console.log(`connection waiting for available`)
})

module.exports = pool