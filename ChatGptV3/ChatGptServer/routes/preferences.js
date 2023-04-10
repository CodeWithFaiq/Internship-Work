const express=require('express');
const preferenceModel=require('../Models/preferencesSchema');
const router=express.Router();

router.get('/',async(req,res)=>{
    const preferences=await preferenceModel.find();
    res.send(preferences);
})

router.get('/:uId',async(req,res)=>{
const preferences=await preferenceModel.find({user:req.params.uId});
res.send(preferences);
})


router.post('/',async(req,res)=>{
    const {template,teaser,hint,title,author,url,topic,activity,public,tone,file_content,email}=req.body;
    
    if(!email){
  const preference=await preferenceModel.create({
    template,
    teaser,
    hint,
    title,
    author,
    url,
    topic,
    activity,
    isPublic: public ,
    tone,
    file_content
    })
    }
    else{
          const preference=await preferenceModel.create({
            email,
    template,
    teaser,
    hint,
    title,
    author,
    url,
    topic,
    activity,
    isPublic: public ,
    tone,
    file_content
    })
    }
  
res.send('Your Prompt Successfully Entered');
})

module.exports=router;