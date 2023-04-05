const mongoose=require('mongoose');


const preferencesSchema=mongoose.Schema({
    template:String,
    teaser:String,
    hint:String,
    title:String,
    author:String,
    url:String,
    topic:String,
    activity:String,
    isPublic:{
        type:Boolean,
    
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    },
    tone:String,

})

const preferenceModel=mongoose.model('preferences',preferencesSchema);

module.exports=preferenceModel;