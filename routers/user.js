const express = require('express');
const md5 = require('md5');
const path = require('path');
const router = express.Router();


const {user} = require('../models');

router.get('/', (req, res, next) => {
    console.log("user get root");
    res.render('user', {title : 'login'});
});

router.post('/', (req, res) => {
    console.log(res)
    console.log('user insert');
    var username = req.body.username
    var datetime = Date.now
    // var email = req.body.email
    // var password = req.body.password
    // var age = req.body.age
    // console.log(username + ", " + 
    //             datetime + ", " + 
    //             email + ", " + 
    //             password + ", " + 
    //             age)
    console.log(username + ", " + datetime)
    user.findOrCreate({
        where : {username : req.body.username},
        defaults : {
            email : req.body.email,
            password : req.body.password,
            username : req.body.username,
            id : md5(username + Date.now),
            time : datetime,
            gender : req.body.gender,
            age : req.body.age
        }
    })
    .spread((result, created) => {
        if(created) {
            console.log(result);
            console.log("success");
        } else {
            console.log("already exist");
        }
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;