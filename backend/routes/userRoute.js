const express = require('express');
const { db } = require('../models/userModel');
const User = require('../models/userModel');
const database = require("../utils/db");

const router = express.Router();



router.get('/createadmin', async (req,res) =>{
    try {
        const user = new User({
            username: "admin",
            password: "123",
            isAdmin: true
        });
        // const userOld = await user.find({ username: 'admin' });
        // if(!userOld){
            
        // }  
       
        // res.send(deleteO);

        const newUser = await user.save();
        res.send(user);
    } catch (error) {
        res.send({msg: error.messenge});
    }
});

router.post("/signin", async (req,res) => {

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user){
        res.send({
            username: user.username,
            isAdmin: user.isAdmin
        })
    }
    else{
        res.status(404).send({ msg: 'Invalid Email or Password.'});
    }
});

router.post("/register", async (req,res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        sex: req.body.sex,
        password: req.body.password,
        mail: req.body.mail
    })
    if(user){
        const newUser = await user.save();
        res.send(user);
    }
    else{
        res.status(201).send({msg: "error Register"});
    }
    

});

router.get("/tim", async(req, res) => {
    try {
        const user = await User.find({
        });
        console.log(user);
        res.send(user);
    } catch (error) {
        
    }
    database.close();
})

router.delete ('/', async (req,res) => {
    try {
        const deleteO = await user.deleteOne({ '_id': ObjectId("5fb4cafc1bfdeb11386b6ef7"),});
    } catch (error) {
        
    }
})

module.exports = router;