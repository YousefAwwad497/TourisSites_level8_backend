var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); var app = express();
var mongoose = require('mongoose'); mongoose.connect('mongodb://localhost/test');

var publicFolder = path.join(__dirname, 'public');

app.use(express.static (publicFolder));
app.use(bodyParser.urlencoded({ extended: true }))

var User = mongoose.model('User', {name: String, age: Number});

app.get('', (req, res) =>{
    res.render(publicFolder + '/signup.html');
})

app.post('/user', (req, res) =>{
                                        //id of input           //id of input
    var user = new User({name: req.body.username, age: req.body.age});

    user.save().then(newUser => {
        res.send("creaetd new user successfully!");
    }).catch(err => {
        res.send("something went wrong!");
    })
})

/*app.listen(3000, () => {
console.log("Server is running on port 3000");
});*/