const express=require('express');
const mongoose=require('mongoose');
const config=require('config');
const app=express();
const preferencesRouter=require('./routes/preferences');
const { json } = require('body-parser');
const userRouter=require('./routes/users');
const cors=require('cors');
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/preferences',preferencesRouter);
app.use('/api/users',userRouter);
app.listen(3000)


mongoose.connect(config.get('mongodbURL')).then(()=>{
    console.log('Successfully connected to the database')
}).catch((e)=>{
    console.log(e)
})