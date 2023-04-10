const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email:String,
    username:String,
    password:String,
    clientKey:String,
    secretKey:String
})


const userModel=mongoose.model('users',userSchema);

module.exports=userModel;