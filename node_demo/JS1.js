/*
 * Filename: d:\node_demo\JS1.js
 * Path: d:\node_demo
 * Created Date: Tuesday, March 20th 2018, 6:30:15 pm
 * Author: Tahir
 * 
 * Copyright (c) 2018 VLITS
 */

var express = require("express");
var app = express();
var port = 3000; //Any port no
app.use("/",(req,res)=>{
    res.sendFile(__dirname +"/index1.html");
})
app.listen(port,()=>{
    console.log("Listening at port number:"+port);
})