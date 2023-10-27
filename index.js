 
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.get('/about',(req,res)=>{
    res.send('about me ');
});

app.get('/contact',(req,res)=>{
    res.send('From Contact');
});

app.get('/test',(req,res)=>{
    res.send('<h1>TEST</h1> ');
});






app.listen(5000,()=>{
    console.log('Server on port 5000')
});

 
 
