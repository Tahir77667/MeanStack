/*
 * Filename: d:\node_demo\app.js
 * Path: d:\node_demo
 * Created Date: Monday, March 19th 2018, 4:27:58 pm
 * Author: Tahir
 * 
 * Copyright (c) 2018 VLITS
 * 
 * Revision History
 */

//this is to include the express framework in your file
var express = require("express");

// A method express is saved in the variable app
var app = express();

// Port Number 3000 is stored in variable port
var port = 3000;

//A method inside express function stored in app is used."(req,res)" is a function. Here => is lamda expression.We are sending a file index.html under directory node_demo.
app.use("/",(req,res)=>{
        //res.send("Hello World!!");
        res.sendFile(__dirname +"/index.html");
});

//The app will listen to(run at) port number specified. 
app.listen(port,()=>{
    console.log("Listening at Port Number"+port);
});