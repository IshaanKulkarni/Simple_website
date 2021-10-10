const express=require('express');
const http=require('http');
const app=express();

app.listen(6070)

app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname});
});
app.get('/about',(req,res)=>{
    res.sendFile('./about.html',{root:__dirname});
});
app.get('/contact',(req,res)=>{
    res.sendFile('./contact.html',{root:__dirname});
});
app.get('/OffTopic',(req,res)=>{
    res.sendFile('./offtopic.html',{root:__dirname});
});


app.use((req,res)=>{
    res.status(404).sendFile('./404.html');
})