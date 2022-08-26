const express = require('express');
const router = express.Router();
const path = require('path');

console.log(__dirname);

router.get('/flights',(req,res)=>{
    return res.sendFile(path.join(__dirname,"..","views","index.html"))
})

module.exports = router;