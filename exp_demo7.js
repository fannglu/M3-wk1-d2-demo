// middleware function 

var express = require('express');
var app = express();

// Simple request time logger
app.use(function (req, res, next) {
  //middleware called 'next', when you interrupted the app when its using to check for error 
  console.log("A new request recieved at " + Date.now());

  // This function call tells that more processing is
  // required for the current request and is in the next middleware
  //function/route handler.
  next();
});


app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000);


