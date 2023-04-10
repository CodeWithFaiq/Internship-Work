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
    email:String,
    tone:String,

    file_content:String,

})

const preferenceModel=mongoose.model('preferences',preferencesSchema);

module.exports=preferenceModel;