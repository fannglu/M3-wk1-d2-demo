var express =  require('express');
var router = express.Router();

router.get('/home', function(req,res) {
    res.send('Hello world!')
});

//get means when you wanna search on at the search bar youre getting the info 

router.post('/home', function(req,res) {
    res.send("You just call the post method at '/hello'!\n");
})

// post -  retrieving and post something 


//export this router to use in the exp_demo3b.js 
module.exports = router;