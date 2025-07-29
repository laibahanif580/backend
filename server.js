require('dotenv').config();
const express=require('express');  //common js

//import express from 'express'  //module js for this to run you need to write 
//type=module in package.json file

const app=express();//the main function of express is to serve on a route and listen.

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

//get a list of 5 jokes

// app.get('/api/jokes',(req,res)=>{
//     const jokes=[
//         {
//             id:1,
//             title:'a joke',
//             content:'This is a joke'
//         },
//         {
//             id:2,
//             title:'another joke',
//             content:'This is another joke'
//         },
//         {
//             id:3,
//             title:'a third joke',
//             content:'This is third joke'
//         },
//          {
//             id:4,   
//             title:'a fourth joke',
//             content:'This is a fourth joke'
//         },
//          {
//             id:5,
//             title:'a fifth joke',
//             content:'This is a fifth joke'
//         },

//     ];
//     res.send(jokes);
// });

const port=process.env.PORT||4000;
//in local host you can get hardcoded data but in production 100% necessary is that you should
//get it from env file else your app will not run.

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.get('/twitter',(req,res)=>{
    res.send("hello laiba");
})

app.get('/login',(req,res)=>{
    res.send("hello please login");
})
app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
    }
);




