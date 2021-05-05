const express = require('express');
const hackersRoute = express.Router();
const bodyParser =  require('body-parser');
const auth = require('../authenticate');
const users = require('../models/users');

hackersRoute.use(bodyParser.json());
hackersRoute.route('/')
.get(auth.verifyUSer,(req,res,next)=>{

    console.log(req.query)
    users.find({}).skip(parseInt(req.query.skip)).limit(parseInt(req.query.limit)).select("-password")
    .then((user)=>{
        res.json(user);
    })

})

hackersRoute.route('/:hackerId')
.get(auth.verifyUSer,(req,res,next)=>{
    if(req.params.hackerId)
    console.log("REW",req.params.hackerId)

    users.findOne({userId:req.params.hackerId}).select("-password")
    .then((user)=>{
        res.json(user);
    })
    .catch(err=>{console.log("ERROR => "+err); throw new Error(err)})

});
module.exports= hackersRoute;
    