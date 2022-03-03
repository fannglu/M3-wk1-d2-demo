var express = require('express');
var app = express();

///First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start");
    next();
 }); // the momment the app is launch 
 
 //Route handler
 app.get('/', function(req, res, next){ //only when you wanna intercept 
    res.send("Middle");
    next();
 });
 
 app.use('/', function(req, res){
    console.log('End');
 });

app.listen(3000);

// middleware detecting something from the begginning all the way to the end 
// to check if the data is sent or not, if the data is not sent, middleware help to detect and print the message 
