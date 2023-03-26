const express=require('express')
const app=express();
const names=require('./userModel')
const cors = require('cors');

require('./db')
app.use(cors())
app.use(express.json())
app.get('/',async(req,res)=>{
  const data=await names.find();
  res.send(data);
})
app.post('/add',async(req,res)=>{
    const {name}=req.body;
    const newUser=new names({name});
    const savedData=await newUser.save();
    res.send(savedData);
})
const port=process.env.port||8000;
app.listen(port,()=>{
    console.log('listening on poret 800')
})