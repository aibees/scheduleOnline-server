const sql = require('./mysql')

function select(query, params) {
    let result = null

    return new Promise((resolve, reject) => {
        sql.getConnection((err, conn) => {
            if(err) {
                console.log("Connection Failed")
                reject(err.message)
            }
            else {
                conn.query(query, params, (err, rows) => {
                    if(err) {
                        console.log("SQL Failed")
                        reject(err.message)
                    }
                    else {
                        resolve(rows)
                    }
                })
                conn.release()
            }
        })
    })
}

async function update(query, params) {
    var result = null

    return new Promise((resolve, reject) => {
        sql.getConnection((err, conn) => {
            if(err) {
                console.log("Connection Failed")
                reject(err.message)
            }
            else {
                conn.query(query, params, (err, rows) => {
                    if(err) {
                        console.log("SQL Failed")
                        reject(err.message)
                    }
                    else {
                        console.log(rows)
                        resolve(rows)
                    }
                })
            }
        })
    })
}

module.exports = {
    select: select,
    update: update
}