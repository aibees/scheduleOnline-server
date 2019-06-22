const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("user get root");
    res.send("user api root");
});

module.exports = router;