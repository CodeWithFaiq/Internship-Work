

const userModel=require('../Models/userSchema');
const express=require('express');
const router=express.Router();

router.post('/',async(req,res)=>{
    const {email,username}=req.body;
    const user=await userModel.create({
      username,
      email
    })
    res.send('user successfully created');
})

router.post('/:email',async(req,res)=>{
  
 const user=await userModel.findOne({email:req.params.email});
 if(user){
  res.send(user)
 }
 else{
  res.send({});
 }
})

module.exports=router;