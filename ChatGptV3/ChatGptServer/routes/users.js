

const userModel=require('../Models/userSchema');
const express=require('express');
const router=express.Router();

router.post('/',async(req,res)=>{
    const {username,password}=req.body;
    const user=await userModel.create({
      username,
      password
    })
    res.send('user successfully created');
})

module.exports=router;