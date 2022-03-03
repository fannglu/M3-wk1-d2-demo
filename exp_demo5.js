var express = require('express');
var app = express();

app.get('/bookings/:bookingId', function(req,res) {
    res.send(req.params); 
})

// when there is : means you can put anything which is a variable called bookingId 


app.listen(3000);

// routing parameters for us to retrieve specific information, represent by ID numbers, to identify very specific customer 