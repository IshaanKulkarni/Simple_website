const express=require('express');
const http=require('http');
const app=express();

app.listen(5000)

app.get('/',(req,res)=>{
    res.sendFile('./docs/index.html',{root:__dirname});
});
app.get('/about',(req,res)=>{
    res.sendFile('./docs/about.html',{root:__dirname});
});
app.get('/contact',(req,res)=>{
    res.sendFile('./docs/contact.html',{root:__dirname});
});
app.get('/OffTopic',(req,res)=>{
    res.sendFile('./docs/offtopic.html',{root:__dirname});
});


app.use((req,res)=>{
    res.status(404).sendFile('./docs/404.html');
})