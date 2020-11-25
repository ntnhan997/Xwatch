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

router.get("/tim", async(req, res) => {
    try {
        const user = await User.find({});
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