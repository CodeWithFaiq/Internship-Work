const express=require('express');
const preferenceModel=require('../Models/preferencesSchema');
const router=express.Router();

router.get('/',async(req,res)=>{
    const preferences=await preferenceModel.find();
    res.send(preferences);
})

router.post('/',async(req,res)=>{
    const {template,teaser,hint,title,author,url,topic,activity,public,tone}=req.body;
    const preference=await preferenceModel.create({
    template,
    teaser,
    hint,
    title,
    author,
    url,
    topic,
    activity,
    isPublic: public || false,
    tone
    })
res.send('Your Prompt Successfully Entered');
})

module.exports=router;