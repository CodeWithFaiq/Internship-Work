const express=require('express');
const preferenceModel=require('../Models/preferencesSchema');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('hehhee')
})

router.post('/',async(req,res)=>{
    const {template,teaser,hint,title,author,url,topic,activity,public}=req.body;
    const preference=await preferenceModel.create({
    template,
    teaser,
    hint,
    title,
    author,
    url,
    topic,
    activity,
    isPublic: public || false
    })
res.send('Your Prompt Successfully Entered');
})

module.exports=router;