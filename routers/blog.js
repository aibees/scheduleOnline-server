const express = require('express');
const md5     = require('md5');
const path    = require('path');
const fs      = require('fs')
const sql     = require('../database/connect')
const router  = express.Router();

router.get('/', (req, res, next) => {
    console.log("user get root");
    res.send("hello");
});

router.post('/postlog', async (req, res) => {
    var d = new Date();
    const log = {
        ymd : getYmd(d),
        ip : req.body.ip,
        title : req.body.title
    }

    console.log(log);

    const params = [log.ip, log.ymd, log.title]
    const sqlQuery = await fs.readFileSync(__dirname + `\\..\\database\\sql\\blog\\reportViewLog.sql`).toString()
    const result   = await sql.update(sqlQuery, params)
    res.send(result)
})

const getYmd = (date) => {
    var yy = date.getFullYear() + "";
    var mm = date.getMonth() + "";
    var dd = date.getDate() + "";

    if(date.getMonth() < 10) {
        mm = "0" + mm;
    }

    if(date.getDate() < 10) {
        dd = "0" + dd;
    }
    return yy + mm + dd
}

module.exports = router
