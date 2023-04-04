const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    username:String,
    password:String,
    clientKey:String,
    secretKey:String
})

const userModel=mongoose.model('users',userSchema);

module.exports=userModel;